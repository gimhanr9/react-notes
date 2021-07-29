import MUIDataTable from "mui-datatables";
import OrderData from "../../Data/Orders";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OrderDetailsDialog from "./OrderDetailsDialog";
import Link from "@material-ui/core/Link";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const data = OrderData;
  const preventDefault = (event) => event.preventDefault();
  const columns = [
    {
      label: "Customer Name",
      name: "name",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let name = data[dataIndex].name;
          return (
            <Grid container alignItems="center">
              <Grid item lg={2}>
                <Link href="#" onClick={preventDefault} color="inherit">
                  <Avatar
                    className={classes.small}
                    src="https://img.icons8.com/plasticine/2x/hamburger.png"
                    alt=""
                  />
                </Link>
              </Grid>
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
      label: "Partner",
      name: "partner",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let partner = data[dataIndex].partner;
          return (
            <div>
              <Typography variant="body2">{partner}</Typography>
            </div>
          );
        },
      },
    },

    {
      label: "Location",
      name: "location",
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
        console.log(colData);
        setOpen(true);
      }
    },
  };

  return (
    <div>
      <MUIDataTable columns={columns} data={data} options={options} />

      <OrderDetailsDialog
        open={open}
        name="Tom"
        noOfOrders={23}
        total={861}
        handleClose={closeDialog}
      />
    </div>
  );
}

export default OrderDataGrid;
