import MUIDataTable from "mui-datatables";

import Typography from "@material-ui/core/Typography";

import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import DishOrdersData from "../../Data/DishOrders";

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

function DishOrdersTable() {
  const data = DishOrdersData;

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
      label: "My No of Orders",
      name: "myOrdersNo",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let myOrdersNo = data[dataIndex].myOrdersNo;
          return (
            <div>
              <Typography align="left" variant="body2">
                {myOrdersNo}
              </Typography>
            </div>
          );
        },
      },
    },
    {
      label: "Market No of Orders",
      name: "marketOrdersNo",
      options: {
        customBodyRenderLite: function render(dataIndex) {
          let marketOrdersNo = data[dataIndex].marketOrdersNo;
          return (
            <div>
              <Typography align="left" variant="body2">
                {marketOrdersNo}
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
export default DishOrdersTable;
