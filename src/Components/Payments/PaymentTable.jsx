import MUIDataTable from "mui-datatables";
import OrderData from "../../Data/Orders";
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import PaymentData from "../../Data/Payment";
import PaymentDetailsDialog from "./PaymentDetailsDialog";

const getMuiTheme = () =>
  createTheme({
    overrides: {
      MuiChip: {
        root: {
          backgroundColor: "black",
          color: "white",
        },
        deleteIcon: {
          color: "white",
          "&:hover": {
            color: "white",
          },
        },
      },
      MUIDataTableHeadCell: {
        root: {
          padding: "10px",
        },
        data: {
          color: "white",
        },

        sortAction: {
          "& path": {
            color: "white ",
          },
        },
        sortActive: {
          color: "white",
        },
      },
      MuiTableCell: {
        head: {
          backgroundColor: "black !important",
        },
      },

      MUIDataTableToolbar: {
        filterPaper: {
          width: "400px",
          height: "350px",
        },
      },
      MuiInput: {
        root: {
          // width: "300px",
          input: {
            "&:hover": {
              borderColor: "orange !important",
            },
          },
        },
      },
    },
  });

function PaymentTable() {
  function closeDialog() {
    setOpen(false);
  }

  const [open, setOpen] = useState(false);
  const data = PaymentData;
  const orderData = OrderData;

  function findId(dataIndex) {
    for (let i = 0; i < data.length; i++) {
      if (orderData[i].id == dataIndex) {
        setOpen({
          isOpen: true,
          type: orderData[i].type,
          time: orderData[i].time,
          total: orderData[i].price,
          orderId: orderData[i].id,
          date: orderData[i].date,
        });
      }
    }
  }

  const columns = [
    {
      label: "Period",
      name: "period", //Search option dependennt
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let period = data[dataIndex].period;
          return (
            <div>
              <Typography variant="body2">{period}</Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Delivered Orders",
      name: "deliveredOrders",
    },
    {
      label: "Payment Date",
      name: "paymentDate",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let date = data[dataIndex].paymentDate;

          return (
            <div>
              <Typography align="left" variant="body2">
                {date}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Order Value (LKR)",
      name: "price",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let price = data[dataIndex].price;
          return (
            <div>
              <Typography align="left" variant="body2">
                {price}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Restaurant Discounts (LKR)",
      name: "restaurantDiscounts",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let discounts = data[dataIndex].restaurantDiscounts;
          return (
            <div>
              <Typography align="left" variant="body2">
                {discounts}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Commission / Subscription Fee (LKR)",
      name: "commission",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let commission = data[dataIndex].commission;
          return (
            <div>
              <Typography align="left" variant="body2">
                {commission}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Direct Delivery Charges (LKR)",
      name: "deliveryFee",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let deliveryFee = data[dataIndex].deliveryFee;
          return (
            <div>
              <Typography align="left" variant="body2">
                {deliveryFee}
              </Typography>
            </div>
          );
        },
      },
    },

    {
      label: "Payout (LKR)",
      name: "payout",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let payout = data[dataIndex].payout;
          return (
            <div>
              <Typography align="left" variant="body2">
                {payout}
              </Typography>
            </div>
          );
        },
      },
    },

    {
      label: "Status",
      name: "status",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let status = data[dataIndex].status;
          return (
            <div>
              <Typography align="left" variant="body2">
                {status}
              </Typography>
            </div>
          );
        },
        // download: true,
      },
    },
    {
      label: "Transaction Reference",
      name: "reference",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let reference = data[dataIndex].reference;
          return (
            <div>
              <Typography align="left" variant="body2">
                {reference}
              </Typography>
            </div>
          );
        },
      },
    },
  ];
  const options = {
    selectableRows: "none",
    print: false,
    tableBodyHeight: "100%",
    expandableRowsHeader: false,
    download: false,
    elevation: 0,

    onRowClick: (rowData) => {
      findId(rowData[1]);
    },
  };
  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable columns={columns} data={data} options={options} />
      </MuiThemeProvider>
      <PaymentDetailsDialog
        open={open.isOpen}
        type={open.type}
        time={open.time}
        total={open.total}
        orderId={open.orderId}
        date={open.date}
        handleClose={closeDialog}
      />
    </div>
  );
}
export default PaymentTable;
