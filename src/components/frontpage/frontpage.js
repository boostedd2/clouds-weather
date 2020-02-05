import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Today from '../today/today'
import FiveDayExtended from '../fiveDayExtended/fiveDayExtended'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "70px",
    padding: "20px"
  },
  container: {
    display: "flex",
  }
}));

const FrontPage = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <div style={{width: "100%"}}>
          <h2>Quick Peek</h2>
          <Today />
          <FiveDayExtended />
        </div>
      </div>
    </div>
  )
}

export default FrontPage;