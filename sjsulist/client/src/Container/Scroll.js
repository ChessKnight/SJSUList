//this is a scroll component, wrap item inside it
import React from 'react';
import './Scroll.css';

const Scroll =(props)=>{
    return(
        <div className="scroll">
            {props.children}
        </div>
    );
}

export default Scroll;