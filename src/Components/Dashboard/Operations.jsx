import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Divider from "@material-ui/core/Divider";
import AnalyticsDialog from "./AnalyticsDialog";

function Operations() {
  const [openDialog, setOpenDialog] = React.useState(false);

  function ShowDialog() {
    setOpenDialog(true);
  }

  function closeDialog() {
    setOpenDialog(false);
  }

  const missedOrders = 0;
  const inaccurateOrders = 0;
  const downTimeHours = 0;
  const downTimeMinutes = 0;
  const cancelledOrders = 0;
  const operationsRating = "Excellent";
  //const title = "Order ID 5158B9";
  //const date = "Sat,Jul 3,2021";
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText primary="Operations" secondary={operationsRating} />
          <ListItemSecondaryAction></ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Missed Orders" secondary={missedOrders} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="drop-down">
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemText
            primary="Inaccurate Orders"
            secondary={inaccurateOrders}
          />
          <ListItemSecondaryAction>
            <IconButton onClick={ShowDialog} edge="end" aria-label="drop-down">
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

        <AnalyticsDialog open={openDialog} handleClose={closeDialog} />
        <Divider variant="middle" />
        <ListItem>
          <ListItemText
            primary="Downtime"
            secondary={downTimeHours + "h " + downTimeMinutes + "m"}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="drop-down">
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="middle" />

        <ListItem>
          <ListItemText
            primary="Cancelled Orders"
            secondary={cancelledOrders}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="drop-down">
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default Operations;
