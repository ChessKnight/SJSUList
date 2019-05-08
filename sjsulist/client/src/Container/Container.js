//this class is a container window. color is blue, value is the header, wrap any content

import React from 'react';
import './Container.css';

const Container =(props)=>{
    return(
        <div className="containerBox">
            <div className="containerHeader">
                <h6>{props.value}</h6>
            </div>
            <div className="containerBody">
                {props.children}
            </div>
        </div>
        
    );
}

export default Container;