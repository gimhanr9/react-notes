import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
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
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import BusinessIcon from "@material-ui/icons/Business";
import StarIcon from "@material-ui/icons/Star";
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
          <Link key={index} className={classes.linkStyle} to="/">
            <ListItem button>
              <ListItemIcon>{<AccountBalanceIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Notes",
          "Create Note",
          "Favorites",
          "Delete",
          "Orders",
          "Analytics",
          "Market",
          "Reviews",
        ].map((text, index) =>
          index == 0 ? (
            <Link key={index} className={classes.linkStyle} to="/notes">
              <ListItem button>
                <ListItemIcon>{<NoteIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : index == 1 ? (
            <Link key={index} className={classes.linkStyle} to="/create">
              <ListItem button>
                <ListItemIcon>{<NoteAddIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : index == 2 ? (
            <Link key={index} className={classes.linkStyle} to="/favorites">
              <ListItem button>
                <ListItemIcon>{<FavoriteIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : index == 3 ? (
            <Link key={index} className={classes.linkStyle} to="/delete">
              <ListItem button>
                <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : index == 4 ? (
            <Link key={index} className={classes.linkStyle} to="/orders">
              <ListItem button>
                <ListItemIcon>{<AttachMoneyIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : index == 5 ? (
            <Link key={index} className={classes.linkStyle} to="/analytics">
              <ListItem button>
                <ListItemIcon>{<ShowChartIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : index == 6 ? (
            <Link key={index} className={classes.linkStyle} to="/market">
              <ListItem button>
                <ListItemIcon>{<BusinessIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ) : (
            <Link key={index} className={classes.linkStyle} to="/reviews">
              <ListItem button>
                <ListItemIcon>{<StarIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          )
        )}
      </List>
    </Drawer>
  );
}

DrawerComponent.propTypes = {
  handleClose: PropTypes.func,
  setOpen: PropTypes.bool,
};

export default DrawerComponent;
