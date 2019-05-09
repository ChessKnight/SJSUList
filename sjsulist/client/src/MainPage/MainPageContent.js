import React, { Component } from 'react';
import Container from '../Container/Container';
//import ItemCard from '../ItemCardlistComponent/ItemCard';
import './MainPageContent.css';
import NewItems from './NewItems';
import Scroll from '../Container/Scroll';
import Welcome from './Welcome';
import NewGroups from './NewGroups';
import axios from 'axios';

class MainPageContent extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            dataGroup: [],
        }
    }
    componentDidMount(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> this.setState({data}));

        fetch('http://localhost:5000/getstudygroup')
    .then(response => response.json())
    .then(data=> {this.setState({dataGroup: data})});
    }

    deleteGroup  = (event) => {
        const id = event.target.id;
    
        var deleteStudyGroup={
          _id:"",
        }
        
        axios.delete(`http://localhost:5000/studygroupdelete/${id}`, deleteStudyGroup )
        .then(window.location.reload());
      }
      studyGroup=(event)=>{
        const index = event.target.value;
        
        const id = event.target.id;
        
        const userId = localStorage.getItem('username'); 
        
      
      //   event.preventDefault();
      var currentMembers = this.state.dataGroup[index].members;
      currentMembers.push(userId + ', ');
       var updateStudyGroup = {
        members: currentMembers,
      }
      axios.put(`http://localhost:5000/updatestudygroup/${id}`,  updateStudyGroup)
  .then(res => console.log(res.data));
    }
      

    render(){
        return(
            <div className="contentSetUp">
                <Welcome></Welcome>
                <div className="feed">
                    <Container value="New Items for Sale!">
                        <Scroll>
                            <NewItems data={this.state.data}></NewItems>
                        </Scroll>
                    </Container>
                    <Container value="New Groups!">
                        <Scroll>
                            <NewGroups data = {this.state.dataGroup} delete= {this.deleteGroup} join ={this.studyGroup}></NewGroups>
                        </Scroll>
                    </Container>
                </div>
            </div>
        );
    }
}

export default MainPageContent;