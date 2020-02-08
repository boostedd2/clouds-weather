import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  inputBox: {
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "solid white 1px",
    color: "white",
    fontSize: "16px",
    '&::placeholder': {
      color: "white", 
    },
    '&:focus': {
      outline: "none",
    }
  },
  submit: {
    marginLeft: "5px",
    backgroundColor: "transparent",
    border: "solid white 1px",
    color: "white",
    '&:focus': {
      outline: "none"
    }
  }
}));

const ZipInput = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <input className={classes.inputBox} type="text" placeholder="Enter Zip" />
      <button className={classes.submit}>GO</button>
    </div>
  )
}

export default ZipInput;