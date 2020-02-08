import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Today from '../today/today'
import FiveDayExtended from '../fiveDayExtended/fiveDayExtended'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px",
    padding: "0px",
    [theme.breakpoints.up('md')]: {
      padding: "20px",
    }
  },
  container: {
    display: "flex",
  },
  forecastLayout: {
    width: "100%",
  },
}));

const FrontPage = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.forecastLayout}>
          <Today />
          <FiveDayExtended />
        </div>
      </div>
    </div>
  )
}

export default FrontPage;