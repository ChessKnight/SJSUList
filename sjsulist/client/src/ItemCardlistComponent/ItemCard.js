import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './ItemCard.css'
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ItemButton from './ItemButton';
import axios from 'axios';



const styles = theme => ({
  card: {
    width: 200,
    marginLeft: 25,
    marginBottom: 25,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
class ItemCard  extends React.Component{
    state = { expanded: false, canDelete: false};

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
componentDidMount(){
  if(this.props.owner.includes(localStorage.getItem('userId'))){
    this.setState({canDelete: true})
  }
}
deleteItem=(event)=>{
  var deleteItem={
    _id:"",
  }
  console.log(this.props.body);
  axios.delete(`http://localhost:5000/itemdelete/${this.props.body}`,  deleteItem)
  .then(window.location.reload());
}
  
    render() {
      const { classes } = this.props;
      const imgpic = "https://robohash.org/" + this.props.userId;
  
      return (
        <Card className={classes.card}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <CardHeader 
            avatar={
              <h6 className="fontH">{this.props.itemName}</h6>
            }
            
            title=""
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image={this.props.image}
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
            User: {this.props.name}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <ItemButton canDelete={this.state.canDelete} delete={this.deleteItem}></ItemButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
              
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Description: {this.props.description}
              </Typography>
              <Typography paragraph>
               Price: {this.props.price}
              </Typography>
              <Typography paragraph>
                Contact: {this.props.contact}
              </Typography>
              <Typography paragraph>
                Name: {this.props.name}
              </Typography>
              <Typography>
              Condtion: {this.props.condition}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    }
  }
  
  ItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ItemCard);
  



  