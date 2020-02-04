import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    //
  },
  status: {
    marginLeft: "auto",
    alignItems: "center",
    alignContent: "center",
  }
}));

const Navbar = () => {
  const classes = useStyles()

  return(
    <AppBar style={{backgroundColor: "white", color: "black"}} elevation={3}>
      <Toolbar>
        <h2>Clouds</h2>
        <div className={classes.status}>
          <h2>12:37 PM | Jan. 1. 1970</h2>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;