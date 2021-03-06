import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Clock from './clock'

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
    <AppBar style={{backgroundColor: "rgb(70, 118, 250)", color: "white", height: "50px"}} elevation={3}>
      <Toolbar>
        <h2>Clouds</h2>
        <div className={classes.status}>
          <h4><Clock /></h4>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;