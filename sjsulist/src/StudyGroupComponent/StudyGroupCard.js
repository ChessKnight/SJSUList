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
    maxWidth: 1500,
    margin:20,
  },
  media: {
    height: 140,
  },
  typography:{
    size: 10,

  }
};

function StudyGroupCard(props) {
  const { classes } = props;

  return(
    <div>
      {
        props.value.map((user,i)=>{
          return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {props.value[i].title}
                  </Typography>
                  <Typography component="p">
                  {props.value[i].body}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Typography gutterBottom variant="h8" component="h9">
                  Owner: {props.value[i].userId}
                  </Typography>
                  
        
              </CardActions>
              <CardActions>
                <Typography gutterBottom variant="h8" component="h9">
                  Members: 
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
        })
      }
    </div>
  );
  
}

StudyGroupCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyGroupCard);

 






