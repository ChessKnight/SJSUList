import React, { Component } from 'react'
import StudyGroupCard from "./StudyGroupCard";
import StudyGroupForm from './StudyGroupForm';
import './StudyGroup.css'

class StudyGroup extends Component {

  constructor(){
    super()
    this.state={
        data: []
    }
}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=> this.setState({data}));
  }
  render() {
    const d = this.state.data;
    return (
      <div className="study-group">
         <div className="add-group"><StudyGroupForm></StudyGroupForm></div>
         <StudyGroupCard value={d}/> 
         
       

      </div>
    )
  }
}

export default StudyGroup;
