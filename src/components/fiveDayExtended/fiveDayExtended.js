import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clear from '../assets/clear.jpg'
import rain from '../assets/rain.jpg';
import clouds from '../assets/clouds.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
    },
  },
  card: {
    width: "100%",
    [theme.breakpoints.up('md')]: {
      width: "18%",
    },
    marginBottom: "10px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat"
  },
  cardBackground: {
    backgroundColor: "rgba(255,255,255,.7)",
    width: "80%",
    borderRadius: "5px",
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    display: "flex",
  },
  titleDay: {
    marginRight: "20px"
  }
}));

//dynamically load background for weather cards
const statusBackground = (status) => {
  if (status === 'Clear') {
    return clear
  } else if (status === 'Rain') {
    return rain
  } else if (status === 'Clouds') {
    return clouds
  }
}

const FiveDayExtended = ({userZip, extendedForecast, loading, setLoading}) => {
  const classes = useStyles();
  const [sorting, setSorting] = useState(true)
  const [extended, setExtended] = useState([])
  let fiveDay

  useEffect(() => {
    if (!loading) {
      const fiveDay = extendedForecast[0].list.filter(week => {   
        return week.dt_txt.includes("12:00:00")
        }
      )
      setExtended(fiveDay)
      console.log(extended)
    setSorting(false)
    }
  }, [loading, extendedForecast, setSorting]);

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        {sorting ? <div></div> : extended.map(item => 
        <Card className={classes.card} style={{backgroundImage: "url(" + statusBackground(item.weather[0].main) + ")",}} raised={1}>
          <CardContent>
            <div className={classes.title}>
              <Typography className={classes.titleDay} variant="h4" component="h2" >
                Mon
              </Typography>
              <Typography variant="h4" component="h2" style={{marginLeft: "auto"}}>
                {item.main.temp}&deg; F
              </Typography>
            </div>
            <div className={classes.cardBackground}>
              <Typography color="textSecondary">
                {extendedForecast[0].city.name}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                {item.weather[0].main}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {item.weather[0].description}
              </Typography>
              <Typography variant="body2" component="p">
                Humidity: {item.main.humidity}%
              </Typography>
              <Typography variant="body2" component="p">
                <span style={{color:"blue"}}>Low: {item.main.temp_min}&deg;F </span>
                <span style={{color: "red"}}>High: {item.main.temp_max}&deg;F</span>
              </Typography>
              <Typography variant="body2" component="p">
                Clouds: {item.clouds.all}%
              </Typography>
              <Typography variant="body2" component="p">
                Pressure: {item.main.pressure}
              </Typography>
              <Typography variant="body2" component="p">
                Wind: {item.wind.speed}
                <br />
                Deg: {item.wind.deg}
                <br />
                <br />
                <br />
                <br />
                <br />
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button style={{backgroundColor: "grey", color: "white",}} size="small">Hourly View &gt;</Button>
          </CardActions>
        </Card>
        )}
      </div>
    </div>
  )
}

export default FiveDayExtended;