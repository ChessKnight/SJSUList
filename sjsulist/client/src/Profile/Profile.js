import React, { Component } from 'react';
import Container from '../Container/Container';
import './Profile.css';
import User from './User';
import GroupList from './GroupList';
import Store from './Store';

class Profile extends Component{
    state={
        profileImage:""
    }

    componentDidMount(){
        //this is where it fetches the data based on the user id
    }

    render(){
        return(
            <div className="profile">
                <User></User>
                <Container value="Groups">
                    <GroupList></GroupList>
                </Container>
                <Container value="Store">
                    <Store></Store>
                </Container>
            </div>
        );
    }
}

export default Profile;