import React from 'react';
import './Loader.css';
import { checkPropTypes } from 'prop-types';

const Loader =(props)=>{
    if(props.loader)
    {
    return(
        <div className="loaderZone">
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <div className="loader"></div>
            
        </div>
    );}
    else{
        return(props.children);
    }
}
export default Loader;