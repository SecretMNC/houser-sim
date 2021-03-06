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
                    <section className='filter_info_secton'>
                        <h3>List properties with "desired rent" greater than:$</h3>
                        <input className='price_filter_input'
                            placeholder='0' />
                        <button className='filter_btn'>Filter</button>
                        <button className='reset_btn'>Reset</button>
                    </section>
                    <section>

                        <div className='separation_bar'></div>
                        <h2>Home Listings</h2>
                        <div className='home_info'></div>
                    </section>
                </div>
            </div>
        )
    }
}