import React from "react";
//import OrderTable from "../Components/Orders/Table";
import Table1 from "../Components/Orders/Table1";
import Table2 from "../Components/Orders/Table2";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import OrderDataGrid from "../Components/Orders/DataGrid";

function Orders() {
  return (
    <div>
      <Typography variant="h4">Table 1</Typography>
      <Table1 />
      <Box m={3} />

      <Typography variant="h4">Table 2</Typography>
      <Table2 />
      <Box m={3} />

      <Typography variant="h4">Table 3</Typography>
      <OrderDataGrid />
    </div>
  );
}

export default Orders;
