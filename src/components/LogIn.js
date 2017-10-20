import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            userNameInput: '',
            passwordInput: '',
        }
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }
    handleUserInputChange() {

    }
    handlePasswordInputChange() {

    }
    handleLoginClick() {

    }
    handleRegisterClick() {

    }



    render() {
        return (
            <div className='logIn_body'>
                <div className='home_logo'></div>
                <div className='logIn_main'>
                    <div className='logIn_nested'>
                        <h3>Username</h3>
                        <input className='input_box'
                            /*onChange={}*/ />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input className='input_box'
                            /*onChange={}*//>
                    </div>
                    <div>
                        <Link to='/dashboard'>
                            <button className='login_button'
                            /*onClick={}*/>Login</button>
                        </Link>
                        <Link to='/dashboard'>
                            <button className='register_button'
                            /*onClick={}*/>Register</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }

}