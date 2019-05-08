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
            items: [],
            userItems:[],
            created: ""
    }
}

     
    componentDidMount(){
        //this is where it fetches the data based on the user id
        const userId = this.props.match.params.userId;
        axios.get(`http://localhost:5000/userby/${userId}`)
            .then(res => {this.setState({user: res.data})}) 
            //this returns the data containing
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> {this.setState({items: data});this.getItems()});
    }

    getItems(){
        console.log("g");
        var a =[];
        var b = this.state.items;
        console.log(b);
        const userId = this.props.match.params.userId;
        console.log(userId);
        for(var i =0; i<b.length; i++)
        {
            try{
                if(b[i].itemPostedBy.includes(userId)){
                    a.push(b[i]);
                    console.log("yes");
                }
            }catch{
                
            }
        }
        this.setState({userItems: a});
    }
    render(){
        
        
        return(
            <div className="profile">
            
                <User username={this.state.user.name} major = {this.state.user.studentMajor}>
                    
                </User>
                
                <Container value="Groups">
                    <GroupList></GroupList>
                </Container>
                <Container value="Store">
                    <Store items={this.state.userItems}></Store>
                </Container>
                 
            </div>
        );
    }
}

export default Profile;