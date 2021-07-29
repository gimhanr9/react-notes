import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Divider from "@material-ui/core/Divider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
/*import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";*/
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import StepConnector from "@material-ui/core/StepConnector";
import Box from "@material-ui/core/Box";

//import clsx from "clsx";
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
  },
}));

function getSteps() {
  return ["9:34PM", "9:35PM", "10:15PM"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Order placed by customer";

    case 1:
      return "Order accepted by restaurant";

    case 3:
      return "Order delivered to customer";

    default:
      return "Unknown step";
  }
}

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon() {
  const classes = useQontoStepIconStyles();

  return (
    <div>
      <div className={classes.circle} />
    </div>
  );
}
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const StyledDialogTitle = withStyles(styles)((props) => {
  const { classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

function OrderDetailsDialog(props) {
  const classes = useStyles();
  const steps = getSteps();
  function handleClose() {
    props.handleClose();
  }

  return (
    <Dialog maxWidth="sm" open={props.open} onClose={handleClose} fullWidth>
      <StyledDialogTitle onClose={handleClose} />

      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={classes.large}
            src="https://img.icons8.com/plasticine/2x/hamburger.png"
            alt=""
          />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={props.noOfOrders + " orders"}
        />
      </ListItem>

      <DialogContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Order</Typography>
          </Grid>
          <Grid item>
            <Typography>24/7/2021</Typography>
          </Grid>
        </Grid>

        <Stepper orientation="vertical" connector={<QontoConnector />}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              <StepContent>{getStepContent(index)}</StepContent>
            </Step>
          ))}
        </Stepper>
        <Divider />
        <Box m={2} />
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Subtotal</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">LKR {props.total}</Typography>
          </Grid>
        </Grid>
        <Box m={1} />

        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Tax Adjustments</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              LKR {(props.total * 5) / 100}
            </Typography>
          </Grid>
        </Grid>
        <Box m={1} />

        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">EatMe Fee</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              -LKR {(props.total * 10) / 100}
            </Typography>
          </Grid>
        </Grid>
        <Box m={1} />

        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Net Payout</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              LKR{" "}
              {props.total -
                ((props.total * 10) / 100 + (props.total * 5) / 100)}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

OrderDetailsDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  name: PropTypes.string,
  noOfOrders: PropTypes.number,
  total: PropTypes.number,
};

export default OrderDetailsDialog;
