import DataTable, { createTheme } from "react-data-table-component";

import OrderData from "../../Data/Orders";

createTheme("solarized", {
  text: {
    primary: "#0b0b0b",
    secondary: "#0b0b0b",
  },
  background: {
    default: "#f4f4f5",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const columns = [
  {
    name: "Customer Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "Partner",
    selector: "partner",
    sortable: true,
  },

  {
    name: "Location",
    selector: "location",
    sortable: true,
  },

  {
    name: "Price",
    selector: "price",
    sortable: true,
  },
];
function Table2() {
  return (
    <DataTable
      title="Orders"
      columns={columns}
      data={OrderData}
      pagination={true}
      striped={true}
      theme="solarized"
    />
  );
}

export default Table2;
