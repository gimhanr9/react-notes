import MUIDataTable from "mui-datatables";

import OrderData from "../../Data/Orders";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OrderDialog from "../Orders/OrderDialog";

import Link from "@material-ui/core/Link";
import Rating from "@material-ui/lab/Rating";

import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
const getMuiTheme = () =>
  createTheme({
    overrides: {
      MUIDataTableFilterList: {
        chip: {
          marginBottom: "8px",
        },
      },
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
        root: {
          padding: "10px",
        },
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

function ReviewTable() {
  function closeDialog() {
    setOpen(false);
  }

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const data = OrderData;
  const preventDefault = (event) => event.preventDefault();

  const columns = [
    {
      label: "",
      name: "",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let img = data[dataIndex].img;
          return (
            <Grid container alignItems="left">
              <Grid item lg={2}>
                <Avatar className={classes.small} src={img} alt="" />
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      label: "Name",
      name: "name", //Search option dependennt
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let name = data[dataIndex].name;
          return (
            <Grid container alignItems="left">
              <Grid item lg={12}>
                <Typography variant="body2">{name}</Typography>
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      label: "Order",
      name: "id",
      options: {
        customBodyRender: function render(value, tableMeta, updateValue) {
          //orderId = value;
          //let id = data[dataIndex].id;
          console.log(tableMeta, updateValue);
          return (
            <div>
              <Link href="#" onClick={preventDefault} color="inherit">
                <Typography align="left" variant="body2">
                  {value}
                </Typography>
              </Link>
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
          // let location = data[dataIndex].location;
          let date = data[dataIndex].date;
          let time = data[dataIndex].time;
          return (
            <div style={{ marginTop: "5px" }}>
              <Typography
                align="left"
                variant="body2"
                style={{ fontSize: "12px" }}
              >
                {date}
              </Typography>
              <Typography
                align="left"
                variant="body2"
                style={{ fontSize: "12px" }}
              >
                {time}
                {/* {date + "," + time} */}
              </Typography>
            </div>
          );
        },
        // download: true,
      },
    },

    {
      label: "Rating",
      name: "rating",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let rating = data[dataIndex].rating;
          return (
            <Grid container alignItems="left">
              <Grid item lg={12}>
                <Rating
                  value={rating}
                  precision={0.5}
                  style={{
                    fontSize: "18px",
                    color: "#FF5E19",
                  }}
                />
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      label: "Reply",
      name: "",
      options: {
        customBodyRenderLite: function render() {
          //let review = data[dataIndex].review;
          return (
            <div>
              <Link href="#" onClick={preventDefault} color="inherit">
                <Typography align="left" variant="body2">
                  Reply
                </Typography>
              </Link>
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

    onCellClick: (colData, cellMeta) => {
      if (cellMeta.colIndex == 2) {
        //console.log(renderId(cellMeta.dataIndex));
        //let id = renderId(cellMeta.dataIndex);

        setOpen({
          isOpen: true,
          name: data[cellMeta.rowIndex].name,
          orderId: data[cellMeta.rowIndex].id,
          avatar: data[cellMeta.rowIndex].img,
          total: data[cellMeta.rowIndex].price,
          date: data[cellMeta.rowIndex].date,
        });
      }
    },
  };
  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable columns={columns} data={data} options={options} />
      </MuiThemeProvider>
      <OrderDialog
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
export default ReviewTable;
