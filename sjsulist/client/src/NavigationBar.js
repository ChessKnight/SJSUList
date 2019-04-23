import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

//css styling by using Materialize-css 

export class NavigationBar extends Component {
  render() {
       return (
      <nav className="nav-wrapper blue darken-4">
          <div className="container">
              <a href="/" className="brand-logo">SJSUList</a>
                  <ul className="right">
                      <li><a href="/StudyGroup">Study Group</a></li>
                      <li><a href="/Items">Items</a></li>
                  </ul>
          </div>
      </nav>
    )
  }
}

export default NavigationBar;

 