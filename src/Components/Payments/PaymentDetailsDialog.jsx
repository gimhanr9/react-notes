import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

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
function PaymentDetailsDialog(props) {
  const { open, type, time, total, orderId, date } = props;

  function handleClose() {
    props.handleClose();
  }
  return (
    <Dialog maxWidth="sm" open={open} onClose={handleClose} fullWidth>
      <StyledDialogTitle onClose={handleClose} />
      <Box m={3} />

      <DialogContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{"Order " + orderId}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{date + "," + time}</Typography>
          </Grid>
        </Grid>

        <Divider />
        <Box m={2} />
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Order Type</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{type}</Typography>
          </Grid>
        </Grid>
        <Box m={1} />
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Subtotal</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">LKR {total}</Typography>
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
              {total -
                ((total * 10) / 100 + (total * 5) / 100) +
                (total * 3) / 100}
            </Typography>
          </Grid>
        </Grid>
        <Box m={1} />
      </DialogContent>
    </Dialog>
  );
}
PaymentDetailsDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  total: PropTypes.number,
  orderId: PropTypes.string,
  date: PropTypes.string,
};
export default PaymentDetailsDialog;
