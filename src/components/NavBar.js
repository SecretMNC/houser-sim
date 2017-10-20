import React from 'react';
import {Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className='navBar'>
            <img url='./assets/auth_logo.png' alt='houser logo' />
            <h1>HOUSER</h1>
            <h2>Dashboard</h2>
        <Link to= '/'><div className='logOut'>Logout</div></Link>
        </nav>
    )
}