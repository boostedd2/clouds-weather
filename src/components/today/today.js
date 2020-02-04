import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "500px",
  },
  title: {
    //
  },
  pos: {
    marginBottom: 12,
  },
});

const Today = () => {
  const classes = useStyles();

  return(
    <Card className={classes.root} raised={1}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Today
        </Typography>
        <Typography variant="h5" component="h2">
          At a Glance
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Mostly Cloudy
        </Typography>
        <Typography variant="body2" component="p">
          Cloudy for most of the day
          <br />
          Low chance of Rain
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Hourly View</Button>
      </CardActions>
    </Card>
  )
}

export default Today;