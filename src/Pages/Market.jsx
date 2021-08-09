import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Cuisine from "../Components/Market/Cuisine";
import All from "../Components/Market/All";
import Radius from "../Components/Market/Radius";
import Box from "@material-ui/core/Box";

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
}));

function Market() {
  const classes = useStyles();
  const [showComponent, setShowComponent] = useState({
    radius: true,
    all: false,
    cuisine: false,
  });
  function showRadius() {
    setShowComponent({ radius: true });
  }

  function showAll() {
    setShowComponent({ all: true });
  }

  function showCuisine() {
    setShowComponent({ cuisine: true });
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.Container}>
        <ThemeProvider theme={buttonTheme}>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant={showComponent.radius == true ? "contained" : "text"}
              color={showComponent.radius == true ? "secondary" : "primary"}
              onClick={showRadius}
            >
              In Your Radius
            </Button>
            <Button
              variant={showComponent.all == true ? "contained" : "text"}
              color={showComponent.all == true ? "secondary" : "primary"}
              onClick={showAll}
            >
              All Restaurants
            </Button>
            <Button
              variant={showComponent.cuisine == true ? "contained" : "text"}
              color={showComponent.cuisine == true ? "secondary" : "primary"}
              onClick={showCuisine}
            >
              Cuisine
            </Button>
          </ButtonGroup>
        </ThemeProvider>
        {showComponent.radius == true ? (
          <div>
            <Box mt={4} />
            <Radius />
          </div>
        ) : showComponent.all == true ? (
          <div>
            <Box mt={4} />
            <All />
          </div>
        ) : showComponent.cuisine == true ? (
          <div>
            <Box mt={4} />
            <Cuisine />
          </div>
        ) : null}
      </Container>
    </div>
  );
}

export default Market;
