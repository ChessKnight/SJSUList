import React, { Component } from 'react';
import Container from '../Container/Container';
import './Profile.css';
import User from './User';
import GroupList from './GroupList';
import Store from './Store';
import axios from 'axios'
import UserInfo from "./UserInfo";
import Loader from '../Tools/Loader';

class Profile extends Component{
    constructor() {
        super()
        this.state = {
            loaderItems: true,
            loaderGroups: true,
            profileImage:"",
            name: "", 
            email: "",
            studentMajor: "",
            user: [],
            items: [],
            studygroups:[],
            userstudygroups: [],
            userItems:[],
            created: ""
    }
}

     
    componentDidMount(){
        //this is where it fetches the data based on the user id
        const userId = this.props.match.params.userId;
        axios.get(`http://localhost:5000/userby/${userId}`)
            .then(res => {this.setState({user: res.data})});
            //this returns the data containing
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data=> {this.setState({items: data, loaderItems:false});this.getItems()});
        //for fetching study groups
        fetch('http://localhost:5000/getstudygroup')
        .then(response => response.json())
        .then(data=> {this.setState({studygroups: data});this.getGroups()});
    }

    getItems(){
        var a =[];
        var b = this.state.items;
        const userId = this.props.match.params.userId;
        for(var i =0; i<b.length; i++)
        {
            try{
                if(b[i].itemPostedBy.includes(userId)){
                    a.push(b[i]);
                }
            }catch{
                
            }
        }
        this.setState({userItems: a});
    }

    getGroups(){
        var a =[];
        var b = this.state.studygroups;
        console.log(b);
        const userId = this.props.match.params.userId;
        for (var i =0; i<b.length; i++){
            try{
                if(b[i].studyGroupPostedBy.includes(userId))
                {
                    a.push(b[i]);
                }
            }catch{

            }
        }
        this.setState({userstudygroups: a});
    }
    render(){
        
        
        return(
            <div className="profile">
            
                <User username={this.state.user.name} major = {this.state.user.studentMajor}>
                    
                </User>
                
                <Container value="Groups">
                    <GroupList studygroups = {this.state.userstudygroups}></GroupList>
                </Container>
                <Container value="Store">
                    <Loader loader ={this.state.loaderItems}>
                        <Store items={this.state.userItems}></Store>
                    </Loader>
                </Container>
                 
            </div>
        );
    }
}

export default Profile;