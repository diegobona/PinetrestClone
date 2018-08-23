import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/picterestLogo.png";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginLeft: 15
  },
  image: {
    padding: 10,
    width: 7 + "em"
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.image} />
          <Button color="inherit" className={classes.button}>
            Home
          </Button>
          <Button color="inherit" className={classes.button}>
            dashboard
          </Button>
          <Button color="inherit" className={classes.button}>
            settings
          </Button>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
