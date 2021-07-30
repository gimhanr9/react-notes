import MUIDataTable from "mui-datatables";
import OrderData from "../../Data/Orders";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OrderDetailsDialog from "./OrderDetailsDialog";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { useState } from "react";

const getMuiTheme = () =>
  createTheme({
    overrides: {
      MUIDataTableHeadCell: {
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

      /*MUIDataTableToolbar: {
        root: {
          backgroundColor: "black",
          color: "white",
        },

        iconActive: {
          color: "white",
        },
        icon: {
          color: "white",
          "&:hover": {
            color: "white",
          },
        },
      },*/
    },
  });

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function OrderDataGrid() {
  function closeDialog() {
    setOpen(false);
  }
  const classes = useStyles();
  const [open, setOpen] = useState({
    isOpen: false,
    name: "",
    orderId: "",
    noOfOrders: 0,
    avatar: "",
    total: 0,
    date: "",
  });

  const data = OrderData;
  const preventDefault = (event) => event.preventDefault();
  const columns = [
    {
      label: "",
      name: "",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let avatar = data[dataIndex].avatar;
          return (
            <Grid container alignItems="center">
              <Grid item lg={2}>
                <Link href="#" onClick={preventDefault} color="inherit">
                  <Avatar className={classes.small} src={avatar} alt="" />
                </Link>
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let name = data[dataIndex].name;

          return (
            <Grid container alignItems="center">
              <Grid item lg={10}>
                <Link href="#" onClick={preventDefault} color="inherit">
                  <Typography variant="body2">{name}</Typography>
                </Link>
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      label: "ID",
      name: "id",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let id = data[dataIndex].id;
          return (
            <div>
              <Typography variant="body2">{id}</Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Date",
      name: "date",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let date = data[dataIndex].date;
          let time = data[dataIndex].time;
          return (
            <div>
              <Typography variant="body2">{date}</Typography>
              <Typography variant="body2">{time}</Typography>
            </div>
          );
        },
      },
    },

    {
      label: "Order Type",
      name: "orderType",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let location = data[dataIndex].location;
          let date = data[dataIndex].date;
          let time = data[dataIndex].time;
          return (
            <div>
              <Typography variant="body2">{location}</Typography>
              <Typography variant="body2">{date + "," + time}</Typography>
            </div>
          );
        },
        download: true,
      },
    },

    {
      label: "Price",
      name: "price",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let price = data[dataIndex].price;
          return (
            <div>
              <Typography variant="body2">{price}</Typography>
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
    onCellClick: (colData, cellMeta) => {
      if (cellMeta.colIndex == 0) {
        setOpen({
          isOpen: true,
          name: data[cellMeta.rowIndex].name,
          orderId: data[cellMeta.rowIndex].id,
          avatar: data[cellMeta.rowIndex].avatar,
          total: data[cellMeta.rowIndex].price,
          date: data[cellMeta.rowIndex].date,
        });
      }
    },
  };

  return (
    <div>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable columns={columns} data={data} options={options} />
      </ThemeProvider>

      <OrderDetailsDialog
        open={open.isOpen}
        name={open.name}
        avatar={open.avatar}
        total={open.total}
        orderId={open.orderId}
        date={open.date}
        handleClose={closeDialog}
      />
    </div>
  );
}

export default OrderDataGrid;
