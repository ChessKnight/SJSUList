import React, { Component } from 'react'
import StudyGroupCard2 from "./StudyGroupCard2";
import StudyGroupCard from "./StudyGroupCard";
import './StudyGroup.css'
import SearchBar from '../Tools/SearchBar';
import axios from 'axios';
import Loader from '../Tools/Loader';


class StudyGroup extends Component {

  constructor(){
    super()
    this.state={
        data: [], 
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
  console.log(event.target.value)
  var a = event.target.value.substring(0,event.target.value.length- 1) ;
  var b = event.target.value.substring(event.target.value.length- 1) ;
  console.log(a);
  console.log(b);
  console.log(this.state.data[b]._id);

//   event.preventDefault();
        
 const updateStudyGroup = {
    members: this.state.data[b].members.push("fakeid"),
}
console.log(updateStudyGroup.members[0]);

//         const userId = localStorage.getItem('userId'); 

//         axios.put(`http://localhost:5000/"/updatestudygroup/${event.target.value}`,  updateStudyGroup)
//             .then(res => console.log(res.data));

    
//   console.log(event.target.value)
}



//study group delete option 

  deleteGroup  = (event) => {
    



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
                    <li><a href="/login">
                      <button class="button">Add Group Post!</button>
                    </a></li>
                  </div>)}
              </div>

              {/* if logged it redirects to add study group page */}
              <div>
                {localStorage.getItem('jwtToken') && (
                  <div>
                    <li><a href="/addstudygroup">
                  <button class="button">Add Group Post!</button>
                    </a></li>
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
