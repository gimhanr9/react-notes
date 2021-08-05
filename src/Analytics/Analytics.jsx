import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import DatePicker from "../Components/Date/DatePicker";
import Typography from "@material-ui/core/Typography";
import SalesTable from "../Components/Analytics/SalesTable";
//import Charts from "../Components/Analytics/FusionCharts";
//import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const buttonTheme = createTheme({
  palette: {
    secondary: {
      main: "#0b0b0b",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  form: {
    "& > *": {
      paddingBottom: theme.spacing(4),

      width: "50ch",
    },
  },
}));

function Analytics() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState("MM/DD/YYYY");
  const [showComponent, setShowComponent] = useState({
    sales: true,
    orders: false,
    ticket: false,
  });

  function handleOpen() {
    setOpen(true);
  }

  function handleDateChange(dateObj) {
    const start = dateObj.startDate;
    const end = dateObj.endDate;

    setDateRange(start + " - " + end);
    setOpen(false);
  }

  function showOrders() {
    setShowComponent({ orders: true });
  }

  function showSales() {
    setShowComponent({ sales: true });
  }

  function showTickets() {
    setShowComponent({ ticket: true });
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.Container}>
        <form className={classes.form} noValidate autoComplete="off">
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              label="Date"
              color="primary"
              size="small"
              variant="outlined"
              value={dateRange}
              onClick={handleOpen}
            />
          </ThemeProvider>
        </form>
        {open ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <DatePicker handleChange={handleDateChange} />
            </Grid>
          </Grid>
        ) : null}
        <ThemeProvider theme={buttonTheme}>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button
              variant={showComponent.sales == true ? "contained" : "text"}
              color={showComponent.sales == true ? "secondary" : "primary"}
              onClick={showSales}
            >
              Sales
            </Button>
            <Button
              variant={showComponent.orders == true ? "contained" : "text"}
              color={showComponent.orders == true ? "secondary" : "primary"}
              onClick={showOrders}
            >
              Orders
            </Button>
            <Button
              variant={showComponent.ticket == true ? "contained" : "text"}
              color={showComponent.ticket == true ? "secondary" : "primary"}
              onClick={showTickets}
            >
              Tickets
            </Button>
          </ButtonGroup>
        </ThemeProvider>
        {showComponent.orders == true ? (
          <Typography>Orders</Typography>
        ) : showComponent.sales == true ? (
          <SalesTable />
        ) : showComponent.ticket == true ? (
          <Typography>Ticket</Typography>
        ) : null}
      </Container>
    </div>
  );
}

export default Analytics;
