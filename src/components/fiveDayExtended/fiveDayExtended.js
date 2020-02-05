import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fiveDay from '../testData/fiveDay'

const extended = fiveDay[0].list.filter(week => {   
  return week.dt_txt.includes("12:00:00")
  }
)

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "100%",
    padding: "10px",
  },
  container: {
    width: "100%"
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    display: "flex",
  }
});

const FiveDayExtended = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <h2>5 Day Extended</h2>
      <div className={classes.container}>
        {extended.map(item => 
        <Card style={{marginBottom: "10px"}} raised={1}>
          <CardContent>
            <div className={classes.title}>
              <Typography variant="h4" component="h2" >
                Right Now
              </Typography>
              <Typography variant="h4" component="h2" style={{marginLeft: "auto"}}>
                {item.main.temp}&deg; K
              </Typography>
            </div>
            <Typography color="textSecondary">
              {fiveDay[0].city.name}
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
              <span style={{color:"blue"}}>Low: {item.main.temp_min}&deg;K </span>
              <span style={{color: "red"}}>High: {item.main.temp_max}&deg;K</span>
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