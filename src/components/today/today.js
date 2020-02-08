import React, { useState, useEffect }from 'react';
import 'dotenv/config';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import todayStatus from '../testData/todayStatus';
import clear from '../assets/clear.jpg'
import night from '../assets/nightClear.png'
import rain from '../assets/rain.jpg';
import axios from 'axios';
import ZipInput from '../zipinput/zipInput';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    [theme.breakpoints.up('md')]: {
      width: "100%",
    },
    marginLeft: "auto",
    marginRight: "auto"
  },
  inputBar: {
    marginTop: "10px",
    marginBottom: "10px",
    [theme.breakpoints.up('md')]: {
      marginTop: "-15px",
      marginLeft: "10px",
      marginBottom: "5px"
    },
  },
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up('md')]: {
      flexWrap: "nowrap",
    },
  },
  card: {
    width: "100%",
    [theme.breakpoints.up('md')]: {
      marginLeft: "5px ",
      marginRight: "5px",
      marginBottom: "10px"
    },
    marginBottom: "10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%"
  },
  cardBackground: {
    backgroundColor: "rgba(255,255,255,.7)",
    width: "80%",
    borderRadius: "5px"
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    display: "flex",
  }
}));

//dynamically load background for weather cards
const statusBackground = (status) => {
  if (status === 'Clear') {
    return clear
  } else if (status === 'Rain') {
    return rain
  }
}

const Today = () => {
  const classes = useStyles();
  const [forToday, setForToday] = useState([])

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip=06612,us&appid=' + process.env.REACT_APP_API_KEY
    )
    .then(res => {
      setForToday([res.data])
      console.log(forToday)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  
  return(
    <div className={classes.root}>
      <div className={classes.inputBar}>
        <ZipInput />
      </div>
      <div className={classes.container}>
        {forToday.map(item => 
        <Card className={classes.card} style={{backgroundImage: "url(" + statusBackground(item.weather[0].main) + ")"}} raised={1}>
          <CardContent>
            <div className={classes.title}>
              <Typography variant="h4" component="h2" >
                Right Now
              </Typography>
              <Typography variant="h4" component="h2" style={{marginLeft: "auto"}}>
                {item.main.temp}&deg; K
              </Typography>
            </div>
            <div className={classes.cardBackground}>
              <Typography>
                {item.name}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                {item.weather[0].main}
              </Typography>
              <Typography className={classes.pos}>
                {item.weather[0].description}
              </Typography>
              <Typography variant="body2" component="p">
                Humidity: {item.main.humidity}%
              </Typography>
              <Typography variant="body2" component="p">
                <span style={{color:"blue"}}>Low: {item.main.temp_min}&deg;K </span>
                <span style={{color: "red"}}>High: {item.main.temp_max}&deg;K</span>
              </Typography>
              <Typography variant="body2" component="p">
                Feels Like: {item.main.feels_like}&deg;K
              </Typography>
              <Typography variant="body2" component="p">
                Clouds: {item.clouds.all}%
              </Typography>
              <Typography variant="body2" component="p">
                Visibility: {item.visibility}
              </Typography>
              <Typography variant="body2" component="p">
                Pressure: {item.main.pressure}
              </Typography>
              <Typography variant="body2" component="p">
                Wind: {item.wind.speed}
                <br />
                Deg: {item.wind.deg}
              </Typography>
              <Typography variant="body2" component="p">
                Sunrise: {item.sys.sunrise}
                <br />
                Sunset: {item.sys.sunset}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button style={{backgroundColor: "grey", color: "white",}} size="small">Hourly View &gt;</Button>
          </CardActions>
        </Card>
        )}
        {todayStatus.map(item => 
        <Card className={classes.card} style={{backgroundImage: "url(" + night + ")"}} raised={1}>
          <CardContent>
            <div className={classes.title}>
              <Typography style={{color: "white"}} variant="h4" component="h2" >
                 Tonight
              </Typography>
              <Typography variant="h4" component="h2" style={{marginLeft: "auto", color: "white"}}>
                {item.main.temp}&deg; K
              </Typography>
            </div>
            <div className={classes.cardBackground}>
              <Typography>
                {item.name}
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                {item.weather[0].main}
              </Typography>
              <Typography className={classes.pos}>
                {item.weather[0].description}
              </Typography>
              <Typography variant="body2" component="p">
                Humidity: {item.main.humidity}%
              </Typography>
              <Typography variant="body2" component="p">
                <span style={{color:"blue"}}>Low: {item.main.temp_min}&deg;K </span>
                <span style={{color: "red"}}>High: {item.main.temp_max}&deg;K</span>
              </Typography>
              <Typography variant="body2" component="p">
                Feels Like: {item.main.feels_like}&deg;K
              </Typography>
              <Typography variant="body2" component="p">
                Clouds: {item.clouds.all}%
              </Typography>
              <Typography variant="body2" component="p">
                Visibility: {item.visibility}
              </Typography>
              <Typography variant="body2" component="p">
                Pressure: {item.main.pressure}
              </Typography>
              <Typography variant="body2" component="p">
                Wind: {item.wind.speed}
                <br />
                Deg: {item.wind.deg}
              </Typography>
              <Typography variant="body2" component="p">
                Sunrise: {item.sys.sunrise}
                <br />
                Sunset: {item.sys.sunset}
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

export default Today;