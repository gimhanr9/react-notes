import React from "react";

/*import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Divider from "@material-ui/core/Divider";*/

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
  },

  percentage: {
    fontSize: 12,
    color: "#FF0000",
  },

  icon: {
    color: "#FF0000",
    fontSize: 12,
  },
}));

function Customer() {
  const numberOfCustomers = 40;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Customers
          </Typography>
        </Box>
        <Typography
          className={classes.amount}
          //align="center"
          variant="h4"
          component="h1"
          gutterBottom
        >
          {numberOfCustomers}
        </Typography>
        <Box display="flex" mt={-1}>
          <ArrowDownwardIcon className={classes.icon} />
          <span className={classes.percentage}>
            8.7% compared to the last period
          </span>
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

export default Customer;
