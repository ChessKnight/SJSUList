import React, { Component } from 'react'
import StudyGroupCard from "./StudyGroupCard";
import './StudyGroup.css'
import SearchBar from '../Tools/SearchBar'

class StudyGroup extends Component {

  constructor(){
    super()
    this.state={
        data: [], 
        searchString:'',
        constantData: [],
    }
}

  componentDidMount(){
    fetch('http://localhost:5000/getstudygroup')
    .then(response => response.json())
    .then(data=> this.setState({data}, this.setState({constantData: data})));
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
    console.log(this.state.data);

}
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
 
         <StudyGroupCard value={d}/> 
         
       </div>

      </div>
    )
  }
}

export default StudyGroup;
