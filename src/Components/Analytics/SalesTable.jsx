import MUIDataTable from "mui-datatables";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
//import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { makeStyles } from "@material-ui/core/styles";

import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import SalesData from "../../Data/Sales";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  priceRange: {
    color: "#A9A9A9",
  },

  percentage: {
    fontSize: 30,
    color: "#0b0b0b",
  },

  percentageUp: {
    fontSize: 14,
    color: "#FF0000",
  },

  iconUp: {
    color: "#FF0000",
    fontSize: 14,
  },

  percentageDown: {
    fontSize: 14,
    color: "#32CD32",
  },

  iconDown: {
    color: "#32CD32",
    fontSize: 14,
  },
}));
const getMuiTheme = () =>
  createTheme({
    overrides: {
      MuiChip: {
        root: {
          backgroundColor: "lightgrey",
          color: "black",
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

function SalesTable() {
  const classes = useStyles();

  const data = SalesData;

  const columns = [
    {
      label: "",
      name: "",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let number = data[dataIndex].num;
          return (
            <div>
              {number == 4 || number == 5 || number == 9 ? (
                <Box display="flex" alignItems="left" justifyContent="left">
                  {number}
                  <span>
                    <ArrowDownwardIcon className={classes.iconDown} />
                  </span>
                </Box>
              ) : number == 10 ? (
                <Box display="flex" alignItems="left" justifyContent="left">
                  {number}
                  <span>
                    <ArrowUpwardIcon className={classes.iconUp} />
                  </span>
                </Box>
              ) : (
                <Typography align="left" variant="body2">
                  {number}
                </Typography>
              )}
            </div>
          );
        },
      },
    },
    {
      label: "Item",
      name: "name", //Search option dependennt
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let img = data[dataIndex].img;
          let name = data[dataIndex].name;
          let priceRange = data[dataIndex].priceRange;
          return (
            <Grid container alignItems="left" justifyContent="space-around">
              <Grid item lg={2}>
                <Avatar className={classes.small} src={img} alt="" />
              </Grid>
              <Grid item lg={10}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography className={classes.priceRange} variant="body2">
                  {priceRange}
                </Typography>
              </Grid>
            </Grid>
          );
        },
      },
    },
    {
      label: "Sales",
      name: "sales",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let sales = data[dataIndex].sales;

          return (
            <div>
              <Typography align="left" variant="body2">
                {sales}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "%△",
      name: "percentage",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          // let location = data[dataIndex].location;
          let percentage = data[dataIndex].percentage;
          //let percentageType = data[dataIndex].percentageType;

          return (
            <div>
              {percentage > 10 ? (
                <Box
                  display="flex"
                  alignItems="left"
                  justifyContent="left"
                  m={-1}
                >
                  <ArrowUpwardIcon className={classes.iconUp} />
                  <span className={classes.percentageUp}>
                    {percentage + "%"}
                  </span>
                </Box>
              ) : percentage == 0 ? (
                <span className={classes.percentage}>{"-"}</span>
              ) : (
                <Box
                  display="flex"
                  alignItems="left"
                  justifyContent="left"
                  m={-1}
                >
                  <ArrowDownwardIcon className={classes.iconDown} />
                  <span className={classes.percentageDown}>
                    {percentage + "%"}
                  </span>
                </Box>
              )}
            </div>
          );
        },
      },
    },
    {
      label: "Items Sold",
      name: "itemsSold",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let items = data[dataIndex].itemsSold;
          return (
            <div>
              <Typography align="left" variant="body2">
                {items}
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
  };
  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable columns={columns} data={data} options={options} />
      </MuiThemeProvider>
    </div>
  );
}
export default SalesTable;
