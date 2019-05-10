import React, { Component } from 'react'
import StudyGroupCard2 from "./StudyGroupCard2";
//import StudyGroupCard from "./StudyGroupCard";
import './StudyGroup.css'
import SearchBar from '../Tools/SearchBar';
import axios from 'axios';
import Loader from '../Tools/Loader';


class StudyGroup extends Component {

  constructor(){
    super()
    this.state={
        data: [], 
        members: [],
        searchString:'',
        constantData: [],
        loader: true,
    }
}

  componentDidMount(){
    fetch('http://localhost:5000/getstudygroup')
    .then(response => response.json())
    .then(data=> this.setState({data}, this.setState({constantData: data, loader:false})));
  }

  //This filters the list based on the search
  searchClicked=(event)=>{
    
    var c = this.state.constantData;
    var d = [];
    var s = this.state.searchString;
    for(var i=0; i<c.length; i++){
        
        if(c[i].description.includes(s))
        {
            d.push(c[i]);
        }
    }
    this.setState({data: d});

}
studyGroup=(event)=>{
  const index = event.target.value;
  const id = event.target.id;
  const userId = localStorage.getItem('username'); 
  
//   event.preventDefault();
var currentMembers = this.state.data[index].members;
  console.log('here')
  
  if (localStorage.getItem('username')){
    if (!currentMembers.includes(userId + ', ')){
      currentMembers.push(userId + ', ');
      console.log(this.state.data[index].members);
      var updateStudyGroup = {
        members: currentMembers,
      }
      
      axios.put(`http://localhost:5000/updatestudygroup/${id}`, updateStudyGroup)
        .then(res => console.log(res.data));
    } else{
          return false
    }
  } else {
    return false
  }

  
//   console.log(event.target.value)
}



//study group delete option 

  deleteGroup  = (event) => {
    const id = event.target.id;

    var deleteStudyGroup={
      _id:"",
    }
    
    axios.delete(`http://localhost:5000/studygroupdelete/${id}`, deleteStudyGroup )
    .then(window.location.reload());
    




  }

 



//study group delete option method ends here 





 
//this is a hlper for searching
searching=(event)=>{
    this.setState({searchString:event.target.value});
}


  render() {
    const d = this.state.data;
    return (
      <div className="container">


           {/* Searchbar component */}
        <div>
          <SearchBar searchClicked={this.searchClicked} searching={this.searching}></SearchBar>
        </div>
            
              {/* add study group options- */}
         <div>
              {/* If not logged in redirects to log in page */}

              <div>
                {!localStorage.getItem('jwtToken') && (
                  <div>
                    <a href="/login">
                      <button class="button">Add Group Post!</button>
                    </a>
                  </div>)}
              </div>

              {/* if logged it redirects to add study group page */}
              <div>
                {localStorage.getItem('jwtToken') && (
                  <div>
                    <a href="/addstudygroup">
                  <button class="button">Add Group Post!</button>
                    </a>
                  </div>)}
              </div>
        </div>




        <div className="study-group"> 
 
          
        <Loader loader={this.state.loader}>
         <StudyGroupCard2 value={d} delete={this.deleteGroup}  join={this.studyGroup} index="0"/> 
         </Loader>
       </div>

      </div>
    )
  }
}

export default StudyGroup;
