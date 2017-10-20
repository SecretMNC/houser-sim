import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className='logIn_body'>
                <div className='home_logo'></div>
                <div className='logIn_main'>
                    <div className='logIn_nested'>
                        <h3>Username</h3>
                        <input className='input_box' />
                    </div>
                    <div>
                    <h3>Password</h3>
                    <input className='input_box'/>
                    </div>
                    <div>
                    <Link to='/dashboard'>  <button className='login_button'>Login</button></Link>
                    <Link to='/dashboard'><button className='register_button'>Register</button></Link>
                    </div>

                </div>
            </div>
        )
    }

}