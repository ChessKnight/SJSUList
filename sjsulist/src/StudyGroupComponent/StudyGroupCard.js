import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//Material-ui card component design

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function StudyGroupCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CS151
          </Typography>
          <Typography component="p">
            Hi this is Tahsin, does anyone wants to study together for the Object Oriented programming exam. I will be at the library on wednesday and thursday evening. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Typography gutterBottom variant="h6" component="h6">
          User
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
          4/12/2019
          </Typography>

      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
          Join Study Group
          </Button>
        <Button size="small" color="primary">
          Delete post
          </Button>
      </CardActions>
    </Card>
  );
}

StudyGroupCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyGroupCard);

 






