import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyle = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    left: theme.spacing(0),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

function InaccurateOrderDialog(props) {
  const classes = useStyle();
  function handleClose() {
    props.handleClose();
  }
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={props.open}>
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <ArrowBackIcon />
      </IconButton>
      <DialogTitle>{props.title}</DialogTitle>

      <Typography variant="body2">{props.date}</Typography>
    </Dialog>
  );
}

InaccurateOrderDialog.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  open: PropTypes.bool,
};

export default InaccurateOrderDialog;
