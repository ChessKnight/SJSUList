import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import StudyGroup from "./StudyGroupComponent/StudyGroup";
import Items from "./ItemCardlistComponent/ItemCardList";
import MainPage from './MainPage'; 
//import Footer from './Footer';
import login from './RegistrationForms/login';
import register from './RegistrationForms/register';
import Profile from  './Profile/Profile'
import ItemForm from './ItemForm/ItemForm';
import StudyGroupForm from './StudyGroupComponent/StudyGroupForm';



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
                            <Route path='/login' component={login} />   
                            <Route path='/ItemForm' component={ItemForm} />   
                            <Route path='/register' component={register} /> 
                            <Route path='/profile/:userId' component={Profile} />
                            <Route path='/addstudygroup' component={StudyGroupForm} />
                        </div>
                  </Switch>
            </BrowserRouter>
            
         
            {/* <Footer/> */}
        </div>
    );
  }
}

export default App;
