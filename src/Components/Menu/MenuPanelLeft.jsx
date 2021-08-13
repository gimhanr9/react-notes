import React from "react";
//import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import BackupIcon from "@material-ui/icons/Backup";
import Typography from "@material-ui/core/Typography";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuData from "../../Data/MenuData";
import SaladData from "../../Data/SaladData";
const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    "& .MuiNativeSelect-root": {},
    "& .MuiNativeSelect-select": {},
    margin: theme.spacing(1),
    minWidth: 150,
  },

  button: {
    background: "#eeeeee",
    height: 38,
  },
  icon: {
    background: "#eeeeee",
    color: "#0b0b0b",
    height: 38,
    width: 38,
  },
  root: {
    background: "#eeeeee",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 350,
    height: 38,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  rootList: {
    flexGrow: 1,
    maxWidth: 752,
    marginLeft: "8px",
  },

  container: {
    marginTop: "10px",
    padding: "8px",
  },
}));

function MenuPanelLeft() {
  const classes = useStyles();
  const data = MenuData;
  const saladData = SaladData;
  const [state, setState] = React.useState({
    categories: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.container}>
      <NativeSelect
        className={classes.selectEmpty}
        classes={{ focus: classes.selected }}
        value={state.categories}
        name="categories"
        onChange={handleChange}
        //inputProps={{ style: { fontSize: "40px" } }}
        variant="outlined"
        disableUnderline
      >
        <option value={10}>Breakfast</option>
        <option value={20}>Lunch</option>
        <option value={30}>Dinner</option>
      </NativeSelect>

      <Grid container justifyContent="space-between">
        <Grid item>
          <Paper component="form" elevation={0} className={classes.root}>
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              style={{ color: "#0b0b0b" }}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search Items"
              inputProps={{ style: { fontSize: "15px", height: 100 } }}
            />
          </Paper>
        </Grid>
        <Grid item>
          <IconButton
            className={classes.icon}
            aria-label="delete"
            style={{ borderRadius: 0 }}
          >
            <UnfoldLessIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            className={classes.icon}
            aria-label="delete"
            style={{ borderRadius: 0 }}
          >
            <BackupIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<AddIcon style={{ color: "#0b0b0b" }} />}
            disableElevation
          >
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.button}
            disableElevation
          >
            Save
          </Button>
        </Grid>
      </Grid>
      <Box m={6} />
      <Typography variant="h5">Pizzas</Typography>

      <Divider />

      <List className={classes.rootList}>
        {data.map((item) => (
          <div key={item.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src={item.img} />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.addOn} />
              <ListItemSecondaryAction>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  disableElevation
                >
                  {"Rs. " + item.price}
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" />
          </div>
        ))}
      </List>
      <ListItem>
        <ListItemIcon>
          <AddIcon style={{ color: "#0b0b0b" }} />
        </ListItemIcon>
        <ListItemText primary="Add Item" />
      </ListItem>

      <Box m={6} />
      <Typography variant="h5">Salads</Typography>

      <Divider />
      <List className={classes.rootList}>
        {saladData.map((item) => (
          <div key={item.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" src={item.img} />
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  disableElevation
                >
                  {"Rs. " + item.price}
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" />
          </div>
        ))}
      </List>
      <ListItem>
        <ListItemIcon>
          <AddIcon style={{ color: "#0b0b0b" }} />
        </ListItemIcon>
        <ListItemText primary="Add Item" />
      </ListItem>
    </div>
  );
}

export default MenuPanelLeft;
