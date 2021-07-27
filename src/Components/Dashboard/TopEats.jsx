import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
//import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import Button from "@material-ui/core/Button";

function TopEats() {
  const currentMonth = "July";
  const previousMonth = "June";
  const currentProgressStatus = "Not good";
  const previousProgressStatus = "Very Good";
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText
            primary="Top Eats"
            secondary="Earn benefits for great performance"
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={currentMonth + " progress"}
            secondary={currentProgressStatus}
          />
          <ListItemSecondaryAction>
            <WarningIcon />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem>
          <ListItemText
            primary={previousMonth + " progress"}
            secondary={previousProgressStatus}
          />
        </ListItem>
      </List>

      <Button variant="contained" color="default" disableElevation>
        View More
      </Button>
    </React.Fragment>
  );
}

export default TopEats;
