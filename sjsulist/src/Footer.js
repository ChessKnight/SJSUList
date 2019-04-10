import React from 'react';
import './Footer.css'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import FooterFormat from './FooterComponents/FooterFormat';

const Footer = () =>{
    return(
        <div className="footer blue darken-4">
            <FooterFormat/>
        </div>
    );
}

export default Footer;