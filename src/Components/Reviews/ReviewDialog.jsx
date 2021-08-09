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
import Rating from "@material-ui/lab/Rating";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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

function ReviewDialog(props) {
  const { open, orderId, date, rating, name, time } = props;
  const classes = useStyles();
  function handleClose() {
    props.handleClose();
  }

  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <StyledDialogTitle onClose={handleClose}>
        {date + "-" + time}
      </StyledDialogTitle>
      <Box display="flex" ml={2} mb={2}>
        <Typography variant="subtitle2">Review</Typography>
      </Box>
      <Divider />

      <DialogContent>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Order</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Rating</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{orderId}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <Rating
                  value={rating}
                  precision={0.5}
                  style={{
                    fontSize: "18px",
                    color: "#FF5E19",
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>

      <Box m={3}>
        <Button className={classes.button} fullWidth>
          Send Offer
        </Button>
      </Box>
    </Dialog>
  );
}

ReviewDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  orderId: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  name: PropTypes.name,
  time: PropTypes.string,
};

export default ReviewDialog;
