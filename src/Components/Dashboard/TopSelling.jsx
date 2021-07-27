import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

function TopSelling() {
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText
            primary="Top Selling Items"
            secondary="Ranked by order volume"
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default TopSelling;
