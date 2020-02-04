import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Today from '../today/today'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "40px",
    padding: "20px"
  },
}));

const FrontPage = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <div>
        <h2>Quick Peek</h2>
        <Today />
      </div>
    </div>
  )
}

export default FrontPage;