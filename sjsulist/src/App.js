import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import StudyGroup from "./StudyGroup";
import Items from "./Items";
import MainPage from './MainPage';


class App extends Component {

  render() {
    return (  
        <div className="App">
            <BrowserRouter>
               <NavigationBar />
                  <Switch>
                        <div> 
                            <Route exact path='/' component={MainPage} />
                            <Route path='/StudyGroup' component={StudyGroup} />
                            <Route path='/Items' component={Items} />      
                        </div>
                  </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
