import React, { Component } from 'react';
import Container from '../Container/Container';
import './Profile.css';
import User from './User';
import GroupList from './GroupList';
import Store from './Store';
import axios from 'axios'
import UserInfo from "./UserInfo";

class Profile extends Component{
    constructor() {
        super()
        this.state = {
            profileImage:"",
            name: "", 
            email: "",
            studentMajor: "",
            user: [],
            created: ""
    }
}

     
    componentDidMount(){
        //this is where it fetches the data based on the user id
        const userId = this.props.match.params.userId;
        axios.get(`http://localhost:5000/userby/${userId}`)
            .then(res => {this.setState({user: res.data}); console.log(res.data)}) 
            //this returns the data containing
    }

    render(){
        console.log(this.state.user.name)
        return(
            <div className="profile">
            
                <User username={this.state.user.name} major = {this.state.user.studentMajor}>
                    
                </User>
                
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