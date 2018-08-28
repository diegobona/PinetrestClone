import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "./card/card";
import img from "../assets/dog.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 5 + "%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  picWrapper: {
    width: 100 + "%",
    padding: 10,
    position: "relative"
  }
});

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
