import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import PricesTable from "./PricesTable";
import DishOrdersTable from "./DishOrdersTable";

function All() {
  return (
    <div>
      <Typography variant="h5">Market Captured</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Sales Pie chart"
            secondary="Sales Pie Chart comes here"
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Orders Pie chart"
            secondary="Orders Pie Chart comes here"
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Avg Order Value Bar chart"
            secondary="Avg Order Value Bar Chart comes here"
          />
        </ListItem>
      </List>

      <Typography variant="h5">My Performance</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Sales Bar chart"
            secondary="My Sales vs Avg of other Restaurants"
          />
        </ListItem>
      </List>

      <Typography variant="h5">Conversion</Typography>
      <List>
        <ListItem>
          <ListItemText primary="To Funnel Chart Comparison" />
        </ListItem>
      </List>

      <Typography variant="h5">Prices</Typography>
      <Box m={2} />
      <PricesTable />
      <Box m={4} />

      <Typography variant="h5">Dish Orders</Typography>
      <Box m={2} />
      <DishOrdersTable />
    </div>
  );
}

export default All;
