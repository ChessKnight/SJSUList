import React, { Component } from 'react'
import "./registration.css";
import axios from 'axios';

class Register extends Component {
  state = {
    name:'',
    email: '',
    studentId: '',
    studentMajor: '',
    password: '', 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
      const { name, email, studentId , studentMajor, password} = this.state
      const newUser = {
        name: name,
        email: email,
        studentId: studentId, 
        studentMajor: studentMajor,
        password: password  

    }
    
 
    
    axios.post(`http://localhost:5000/registration`, newUser)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          //redirecting to login page after registration
          this.props.history.push('/login'); 
        }
      })

  
  }


  
  render() {
    
    return (
      
      <div className="form">
        <form  onSubmit={this.submitForm}>
          <h5 className="  text-darken-3">Register for a new account!</h5>
      

              {/* registration field for name */}
              <div className="input-field">
                <label htmlFor="text">Name</label>
            <input type="text" id='name' required="required" onChange={this.handleChange} />
              </div>

              {/* registration field for email */}
              <div className="input-field">
                <label htmlFor="text">SJSU Email</label>
            <input type="text" id='email' required="required" pattern=".+@sjsu.edu" onChange={this.handleChange} />
              </div>

              {/* registration field for student id */}
              <div className="input-field">
                <label htmlFor="text">Student ID</label>
            <input type="number" id='studentId' required="required" onChange={this.handleChange} />
              </div>

              {/* <div className="input-field">
                <select id='studentYear' onChange={this.handleChange}>
                  <option type="text" id="Senior">Senior</option>
                  <option type="text" value="Junior">Junior</option>
                  <option type="text" value="Sophomore">Sophomore</option>
                  <option type="text" value="Freshman">Freshman</option>
                </select>
              </div> */}

             {/* registration field for major */}
              <div className="input-field">
                <label htmlFor="text">Major</label>
            <input type="text" id='studentMajor' required="required" onChange={this.handleChange} />
              </div>

             {/* registration field for password */}
              <div className="input-field">
                <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
              </div>

              
              <div className="button-position">
                <button className="button">Sign up!</button>
              </div>

        </form>
        {/* link to login page*/}
        <div >
          <h6><a href="/login">Already have an account? Click here</a></h6>

        </div>
      </div>
    )
  }
}

export default Register
