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
import clouds from '../assets/clouds.jpg';
import axios from 'axios';

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
  },
  start: {
    fontSize: "40px",
    color: "white",
    marginTop: "80px",
    marginLeft: "auto",
    marginRight: "auto"
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
  } else if (status === 'Clouds') {
    return clouds
  }
}

const Today = ({userZip, setUserZip, extendedForecast, setExtendedForecast, loading, setLoading}) => {
  const classes = useStyles();
  const [forToday, setForToday] = useState([])
  const [forTonight, setForTonight] = useState([])
  const [fetchDataComplete, setFetchDataComplete] = useState(false)

  //grab user input for zipcode
  const handleZip = (e) => {
    setUserZip(e.target.value)
  }


  //api call to openweather using user specified zipcode, displays current weather, updates every 10 minutes
  const getWeather = () => {
    axios.all([
      axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + userZip  + ',us&units=imperial&appid=' + process.env.REACT_APP_API_KEY),
      axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=' + userZip  + ',us&units=imperial&appid=' + process.env.REACT_APP_API_KEY)
    ])
    .then(axios.spread((res1, res2) => {
      setForToday([res1.data])
      setExtendedForecast([res2.data])
      setFetchDataComplete(true)
    }))
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    if (fetchDataComplete) {
        setLoading(false)
        console.log(forToday, extendedForecast)
    }
  }, [loading, fetchDataComplete]);
  
  return(
    <div className={classes.root}>
      <div className={classes.inputBar}>
        <div className={classes.root}>
          <input className={classes.inputBox} type="text" placeholder="Enter Zip" onChange={e => handleZip(e)} />
          <button className={classes.submit} onClick={() => getWeather()}>GO</button>
        </div>
      </div>
      <div className={classes.container}>
        {loading ? <div className={classes.start}>Enter a zipcode to start</div> : forToday.map(item => 
        <Card className={classes.card} style={{backgroundImage: "url(" + statusBackground(item.weather[0].main) + ")"}} raised={1}>
          <CardContent>
            <div className={classes.title}>
              <Typography variant="h4" component="h2" >
                Right Now
              </Typography>
              <Typography variant="h4" component="h2" style={{marginLeft: "auto"}}>
                {item.main.temp}&deg; F
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
                <span style={{color:"blue"}}>Low: {item.main.temp_min}&deg;F </span>
                <span style={{color: "red"}}>High: {item.main.temp_max}&deg;F</span>
              </Typography>
              <Typography variant="body2" component="p">
                Feels Like: {item.main.feels_like}&deg;F
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
        {loading ? <div></div> : todayStatus.map(item => 
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