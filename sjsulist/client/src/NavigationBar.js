import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom'


export class NavigationBar extends Component {
 

  //clear token user name and id from browser storage
  logoutOption() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user.name');
        localStorage.removeItem('userId');
        window.location.reload();
  }


  render() {

    const usersName = localStorage.getItem('user.name')
       return (
      <nav className="nav-wrapper blue darken-4">
          <div className="container">
              <a href="/" className="brand-logo">SJSUList</a>
                  <ul className="right">

                    {/* shows users name if logged in */}
                      {localStorage.getItem('jwtToken') &&
                        <li className="nav-item">
                         <div> 
                          <a className="nav-link" />
                          
                         <div>{usersName}</div>
                           {/* <Link to={`/user/$this.getUserName()`}></Link> */}
                          </div>
                        </li>
                      }

                     {/* study group link*/}
                      <li><a href="/StudyGroup">Study Group</a></li>

                     {/* items link*/}
                      <li><a href="/Items">Items</a></li>


                      {/* shows login option if not logged in */}
                      <li> 
                        {!localStorage.getItem('jwtToken') && (
                        <div>
                              <li><a href="/login">Login</a></li>
                        </div>)}

                      </li>

                      {/* shows logout option if logged in */}
                      {localStorage.getItem('jwtToken') && 
                         <li 
                            onClick={this.logoutOption}>Logout
                         </li>
                      }



                  </ul>

          </div>
      </nav>
    )
  }
}

export default NavigationBar;

 