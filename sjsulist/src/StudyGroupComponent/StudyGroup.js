import React, { Component } from 'react'
import StudyGroupCard from "./StudyGroupCard";
import StudyGroupForm from './StudyGroupForm';

class StudyGroup extends Component {

  render() {
    return (
      <div>
        <p>this is from studygroup page</p>
        <StudyGroupCard/> 
        <StudyGroupForm />

      </div>
    )
  }
}

export default StudyGroup;
