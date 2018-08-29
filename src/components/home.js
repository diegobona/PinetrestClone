import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "./card/card";
import img from "../assets/dog.jpg";
import img2 from "../assets/dog2.jpg";
import img3 from "../assets/dog3.jpg";
import img4 from "../assets/dog4.jpg";

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

const masonryOptions = {
  transitionDuration: 0,
  columnWidth: 300,
  itemSelector: ".grid-item"
};
const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img3} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img4} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img3} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card image={img4} />
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

/*
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
*/
