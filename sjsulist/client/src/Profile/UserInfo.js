import React from 'react';

const UserInfo =(props)=>{
    return(
        <div>
            <p>Major: {props.major}</p>
            <p>Contact: {props.contact}</p>
        </div>
    );
}

export default UserInfo;