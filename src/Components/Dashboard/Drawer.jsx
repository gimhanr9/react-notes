import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import NoteIcon from "@material-ui/icons/Note";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

function DrawerComponent(props) {
  const classes = useStyles();
  const theme = useTheme();
  function handleDrawerClose() {
    props.handleClose();
  }
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.setOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Dashboard"].map((text, index) => (
          <Link className={classes.linkStyle} to="/">
            <ListItem button key={text}>
              <ListItemIcon>{<AccountBalanceIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Notes','Create Note','Favorites','Delete'].map((text, index) => (
          index == 0 ? 
            <Link className={classes.linkStyle} to="/notes">
            <ListItem button key={text}>
              <ListItemIcon>{<NoteIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
           : index==1?
            <Link className={classes.linkStyle} to="/create">
            <ListItem button key={text}>
              <ListItemIcon>{<NoteAddIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
           : index==2?
            <Link className={classes.linkStyle} to="/favorites">
            <ListItem button key={text}>
              <ListItemIcon>{<FavoriteIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          :<Link className={classes.linkStyle} to="/delete">
            <ListItem button key={text}>
              <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;
