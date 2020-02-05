import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import todayStatus from '../testData/todayStatus';
import clear from '../assets/clear.png'
import night from '../assets/nightClear.png'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "100%",
    padding: "10px",
  },
  container: {
    width: "100%",
  },
  card: {
    backgroundImage: "url(" + clear+ ")",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    marginBottom: "10px"
  },
  cardBackground: {
    backgroundColor: "rgba(255,255,255,.5)",
    width: "80%",
    borderRadius: "5px"
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    display: "flex",
  }
});

const Today = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h2>Quick Look</h2>
      <div className={classes.container}>
        {todayStatus.map(item => 
        <Card style={{backgroundImage: "url(" + clear + ")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", marginBottom: "10px"}} raised={1}>
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
        <Card style={{backgroundImage: "url(" + night + ")", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", marginBottom: "10px"}} raised={1}>
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