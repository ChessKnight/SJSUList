import React from 'react';
import './User.css';
import Container from '../Container/Container';
import UserInfo from './UserInfo';

const User =(props)=>{
    return(
        <div>
            <h4 className="userName">{props.username}</h4>
            <hr></hr>
            <div className="user-profile">
            <img alt="user picture" src={"https://robohash.org/"+props.username} className="userPic"></img>
            <Container value="User Info">
                    <UserInfo major={props.major}></UserInfo>
            </Container>
            </div>
        </div>
    );
}

export default User;