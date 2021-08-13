import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}));

function MenuPanelRight() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography align="center" variant="body2" style={{ marginTop: "50%" }}>
        Select an item to view
      </Typography>
    </div>
  );
}

export default MenuPanelRight;
