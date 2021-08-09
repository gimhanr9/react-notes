import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
/*import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";*/
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 600,
  },
  button: {
    backgroundColor: "#0b0b0b",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#0b0b0b",
      color: "#ffffff",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },

  textField: {
    width: "100%",
  },
}));

function ReplyDialog(props) {
  const { open, name, avatar, orderId, date } = props;
  const classes = useStyles();

  function handleClose() {
    props.handleClose();
  }
  return (
    <Dialog maxWidth="sm" open={open} onClose={handleClose} fullWidth>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large} src={avatar} alt="" />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItem>
      <DialogContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{"Order " + orderId}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{date}</Typography>
          </Grid>
        </Grid>

        <Divider />
        <Box m={2} />
        <Grid container>
          <Grid item lg={12}>
            <TextField
              className={classes.textField}
              required
              id="outlined-required"
              label="Reply"
              variant="outlined"
              multiline={true}
              maxRows={10}
            />
          </Grid>
        </Grid>
        <Box m={2} />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary">Reply</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
ReplyDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  name: PropTypes.string,
  avatar: PropTypes.string,
  orderId: PropTypes.string,
  date: PropTypes.string,
};
export default ReplyDialog;
