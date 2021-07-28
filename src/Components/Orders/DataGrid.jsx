import MUIDataTable from "mui-datatables";
import OrderData from "../../Data/Orders";

function OrderDataGrid() {
  const columns = [
    {
      label: "Customer Name",
      name: "name",
    },
    {
      label: "ID",
      name: "id",
    },
    {
      label: "Partner",
      name: "partner",
    },

    {
      label: "Location",
      name: "location",
    },

    {
      label: "Price",
      name: "price",
    },
  ];

  const options = {
    selectableRows: "none",
    print: false,
    tableBodyHeight: "100%",
    expandableRowsHeader: false,
  };

  return (
    <div>
      <MUIDataTable
        title={"Orders"}
        columns={columns}
        data={OrderData}
        options={options}
      />
    </div>
  );
}

export default OrderDataGrid;
