import React, { Component } from 'react'
import "./registration.css";
import axios from 'axios';



class login extends Component {
    state = {
      studentId: '',
      password: '',
    }


handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
  }

  
submitForm = (e) => {
      e.preventDefault();
      const { studentId, password } = this.state
      const newUser = {
        studentId: studentId,
        password: password
    }


axios.post(`http://localhost:5000/login`, newUser)
      .then((res ) => {
          if (res.data ) {
            console.log( res.data); 
            //storing token, user name and id in browser storate
            localStorage.setItem('jwtToken', res.data.jwtToken)
            localStorage.setItem('user.name', res.data.user.name)
            localStorage.setItem('userId', res.data.user._id)
            //redirecting to homepage
            this.props.history.push('/'); 
            window.location.reload();
            // console.log(res.data.user._id)
        } 

    })

  }



 
render() {
    return (
    
      <div className="form">
        <form onSubmit={this.submitForm}>
          <h5 className="text-darken-3">Welcome back, Spartan!</h5>
 
          {/* student id field - login */}
          <div className="input-field">
            <label htmlFor="text">StudentID</label>
            <input type="text" id='studentId' onChange={this.handleChange} />
          </div>

          {/* password field- login */}
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>


          <div className="button-position" >
            <button className="button" >Login</button>
          </div>

          
        
        </form>
          {/* link to registration page*/}
          <div >
            <h6><a href="/register">Click here to create an account</a></h6> 

          </div>
      </div>
  
    )
  }
}
export default login
