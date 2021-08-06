import MUIDataTable from "mui-datatables";

import Typography from "@material-ui/core/Typography";

import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PricesData from "../../Data/Prices";

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

function PricesTable() {
  const data = PricesData;

  const columns = [
    {
      label: "Dish Type",
      name: "dishType",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let dishType = data[dataIndex].dishType;

          return (
            <div>
              <Typography align="left" variant="body2">
                {dishType}
              </Typography>
            </div>
          );
        },
      },
    },

    {
      label: "My Price (LKR)",
      name: "myPrice",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let myPrice = data[dataIndex].myPrice;
          return (
            <div>
              <Typography align="left" variant="body2">
                {myPrice}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Market Price (LKR)",
      name: "myPrice",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let marketPrice = data[dataIndex].marketPrice;
          return (
            <div>
              <Typography align="left" variant="body2">
                {marketPrice}
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
export default PricesTable;
