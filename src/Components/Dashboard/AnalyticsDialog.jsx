import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

const useStyles = makeStyles({
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
});

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
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
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

function AnalyticsDialog(props) {
  const classes = useStyles();
  function handleClose() {
    props.handleClose();
  }

  return (
    <Dialog maxWidth="lg" open={props.open} onClose={handleClose}>
      <StyledDialogTitle onClose={handleClose}>
        21/07/2021-29/07/2021
      </StyledDialogTitle>
      <Box display="flex" ml={2} mb={2}>
        <Typography variant="subtitle2">Inaccurate Orders(1)</Typography>
      </Box>
      <Divider />

      <DialogContent>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Order ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>21/07/2021</TableCell>
              <TableCell>10:49PM</TableCell>
              <TableCell>CF2456</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>21/07/2021</TableCell>
              <TableCell>10:49PM</TableCell>
              <TableCell>CF2456</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>

      <Box m={3}>
        <Button className={classes.button} fullWidth>
          Download CSV
        </Button>
      </Box>
    </Dialog>
  );
}

AnalyticsDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
};

export default AnalyticsDialog;
