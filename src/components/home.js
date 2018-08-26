import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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
  },
  overlay: {
    //border: 2px solid green;
    "z-index": 10,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: 10,
    transition: "background-color .5s, margin .25s",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      margin: 0
    }
  }
});

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
            <div className={classes.overlay} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.picWrapper}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
