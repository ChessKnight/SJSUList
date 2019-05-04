import React from 'react';
import './User.css';
import Container from '../Container/Container';
import UserInfo from './UserInfo';

const User =(props)=>{
    const usersName = localStorage.getItem('username')
    return(
        <div>
            <h4 className="userName">{usersName}</h4>
            <hr></hr>
            <div className="user-profile">
            <img alt="user picture" src="/images/profilepic.png" className="userPic"></img>
            <Container value="User Info">
                    <UserInfo></UserInfo>
            </Container>
            </div>
        </div>
    );
}

export default User;