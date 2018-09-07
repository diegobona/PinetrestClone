import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';



const Login = ({fullScreen}) => {
  
  return (
    <Dialog 
    fullScreen={fullScreen}
    open={true}>
      <DialogTitle>Log in to see more</DialogTitle>
      <DialogContent>
          <DialogContentText>
            Access the best content with a free account!
          </DialogContentText>
      </DialogContent>

    </Dialog>
  );
};

Login.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(Login);