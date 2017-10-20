import React from 'react';
import {Link } from 'react-router-dom';

var logo = require("../assets/header_logo.png");

export default function Navbar() {
    return (
        <nav className='navBar'>
            <img src={logo} alt='houser logo' className='nav_logo'/>
            <h1 className='houser'>Houser</h1>
            <h2 className='dashboard'>Dashboard</h2>
        <Link to= '/'><div className='logOut'>Logout</div></Link>
        </nav>
    
    )
}