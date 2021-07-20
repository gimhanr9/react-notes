import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Divider from "@material-ui/core/Divider";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({}));

function Operations() {
  const classes = useStyle();
  const missedOrders = 0;
  const inaccurateOrders = 0;
  const downTimeHours = 0;
  const downTimeMinutes = 0;
  const cancelledOrders = 0;
  const operationsRating = "Excellent";
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
            <IconButton
              className={classes.icon}
              edge="end"
              aria-label="drop-down"
            >
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
            <IconButton
              className={classes.icon}
              edge="end"
              aria-label="drop-down"
            >
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemText
            primary="Downtime"
            secondary={downTimeHours + "h " + downTimeMinutes + "m"}
          />
          <ListItemSecondaryAction>
            <IconButton
              className={classes.icon}
              edge="end"
              aria-label="drop-down"
            >
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
            <IconButton
              className={classes.icon}
              edge="end"
              aria-label="drop-down"
            >
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default Operations;
