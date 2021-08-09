import MUIDataTable from "mui-datatables";
import OrderData from "../../Data/Orders";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OrderDetailsDialog from "./OrderDetailsDialog";
import Link from "@material-ui/core/Link";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Rating from "@material-ui/lab/Rating";
import { openDialog } from "../../Actions/Actions";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
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
function OrderDataGrid({ openDialogs }) {
  const classes = useStyles();

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
      label: "Type",
      name: "type",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let Type = data[dataIndex].type;
          return (
            <div>
              <Typography align="left" variant="body2">
                {Type}
              </Typography>
            </div>
          );
        },
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
      label: "Status",
      name: "status",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let OrderStatus = data[dataIndex].status;
          return (
            <div>
              <Typography align="left" variant="body2">
                {OrderStatus}
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
              <Typography align="center" variant="body2">
                {price}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Commision Savings (LKR)",
      name: "commision",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let Commision = data[dataIndex].commision;
          return (
            <div>
              <Typography align="center" variant="body2">
                {Commision}
              </Typography>
            </div>
          );
        },
      },
    },

    {
      label: "Preparation Time (Min)",
      name: "preparation",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          // let location = data[dataIndex].location;
          let PreparationTime = data[dataIndex].preparationTime;
          return (
            <div>
              <Typography align="center" variant="body2">
                {PreparationTime}
              </Typography>
            </div>
          );
        },
        // download: true,
      },
    },
    {
      label: "Delivery Time (Min)",
      name: "delivery",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          // let location = data[dataIndex].location;
          let DeliveryTime = data[dataIndex].Delivery;
          return (
            <div>
              <Typography align="center" variant="body2">
                {DeliveryTime}
              </Typography>
            </div>
          );
        },
        // download: true,
      },
    },
    {
      label: "Total Time (Min)",
      name: "total",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let DeliveryTime = data[dataIndex].Delivery;
          let PreparationTime = data[dataIndex].preparationTime;
          return (
            <div>
              <Typography align="center" variant="body2">
                {PreparationTime + DeliveryTime}
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
    onCellClick: (colData, cellMeta) => {
      if (cellMeta.colIndex == 2) {
        openDialogs(
          true,
          data[cellMeta.rowIndex].name,
          data[cellMeta.rowIndex].id,
          data[cellMeta.rowIndex].img,
          data[cellMeta.rowIndex].price,
          data[cellMeta.rowIndex].date
        );
        /*props.dispatch({
          type: "OPEN_DIALOG",
          payload: {
            isOpen: true,
            name: data[cellMeta.rowIndex].name,
            orderId: data[cellMeta.rowIndex].id,
            avatar: data[cellMeta.rowIndex].avatar,
            total: data[cellMeta.rowIndex].price,
            date: data[cellMeta.rowIndex].date,
          },
        });*/
      }
    },
  };

  return (
    <div>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          maxWidth={"lg"}
          columns={columns}
          data={data}
          options={options}
        />
      </ThemeProvider>

      <OrderDetailsDialog />
    </div>
  );
}
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  openDialogs: (open, name, orderId, avatar, price, date) =>
    dispatch(openDialog(open, name, orderId, avatar, price, date)),
});

OrderDataGrid.propTypes = {
  openDialogs: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDataGrid);
