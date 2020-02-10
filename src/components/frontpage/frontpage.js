import React, { useState } from 'react';
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
  const [userZip, setUserZip] = useState('')
  const [extendedForecast, setExtendedForecast] = useState([])
  const [loading, setLoading] = useState(true)

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.forecastLayout}>
          <Today userZip={userZip} setUserZip={setUserZip} extendedForecast={extendedForecast} setExtendedForecast={setExtendedForecast} loading={loading} setLoading={setLoading} />
          <FiveDayExtended userZip={userZip} extendedForecast={extendedForecast} loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </div>
  )
}

export default FrontPage;