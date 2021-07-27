import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: 175,
    borderRadius: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  amount: {
    marginTop: 22,
    fontWeight: 700,
  },
  pos: {
    marginBottom: 12,
  },

  percentage: {
    fontSize: 18,
    color: "#32CD32",
  },

  icon: {
    color: "#32CD32",
    fontSize: 18,
  },
});

function AnalyticsItem() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Likes
        </Typography>
        <Typography
          className={classes.amount}
          align="center"
          variant="h4"
          component="h1"
          gutterBottom
        >
          4283
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" m={-1}>
          <ArrowUpwardIcon className={classes.icon} />
          <span className={classes.percentage}>8.7%</span>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={4}
          mb={-1}
        >
          <Button className={classes.button}>View More</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AnalyticsItem;
