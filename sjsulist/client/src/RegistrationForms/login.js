import React, { Component } from 'react'
import "./registration.css";
import axios from 'axios';


class signin extends Component {
  state = {
    studentId: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { studentId, password } = this.state
    const newUser = {
      studentId: studentId,
      password: password

    }

    axios.post(`http://localhost:5000/login`, newUser)
      .then(res => console.log(res.data));


  }
  render() {
    return (
    
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h5 className="  text-darken-3">Welcome back, Spartan!</h5>
 
          <div className="input-field">
            <label htmlFor="text">StudentID</label>
            <input type="text" id='studentId' onChange={this.handleChange} />
          </div>


          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>


          <div className="button-position" >
            <button className="button">Login</button>
          </div>

        </form>
      </div>
  
    )
  }
}
export default signin
