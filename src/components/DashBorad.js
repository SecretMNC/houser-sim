import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='dashboard_body'>
                    <Link to='/step1'> <button className='add_new_prop'>Add New Proterty </button></Link>
                </div>
                <section>
                    <h3></h3>
                    <input/>
                    <button></button>
                </section>
                <section></section>
            </div>
        )
    }
}