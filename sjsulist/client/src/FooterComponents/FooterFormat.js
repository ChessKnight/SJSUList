import React from 'react';
import About from './About';
import QuickLinks from './QuickLinks';
import './FooterFormat.css'

const FooterFormat =()=>{
    return (
        <div>
            <ul className="footer-format">
                <li><About/></li>
                <li><QuickLinks/></li>
            </ul>
        </div>
    );
}

export default FooterFormat;