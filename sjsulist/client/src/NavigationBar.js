import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom'
//import { createHashHistory } from 'history'
// export const history = createHashHistory()


export class NavigationBar extends Component {
 

  //clear token user name and id from browser storage
  logoutOption() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        //stays on the current page
        // history.push('/')
        window.location.reload();
  }
  getUserName(){
    localStorage.getItem('username');
  }

  // getUserId() {
  //   localStorage.getItem('userId');
  // }



  render() {
    const userId = localStorage.getItem('userId');
    const usersName = localStorage.getItem('username')
       return (
      <nav className="nav-wrapper blue darken-4">
          <div className="container">
              <a href="/" className="brand-logo">SJSUList</a>
                  <ul className="right">

                    {/* shows users name if logged in  and link to users profile*/}
                      {localStorage.getItem('jwtToken') &&
                     
                        <li className="nav-item">
                            <div>                 
                            {/* works fine- test method with simple anchor tag <a href="/profile">{usersName}</a> */}    

                            {/* user profile link */}
                             <Link to={`/Profile/${userId}`}>{usersName}</Link>
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

 