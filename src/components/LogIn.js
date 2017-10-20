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
                <div className='logIn_main'>
                    <div>
                        <h2>Username:</h2>
                        <input />
                    </div>
                    <div>
                    <h2>Password:</h2>
                    <input />
                    </div>
                    <div>
                    <Link to='/dashboard'>  <button>Login</button></Link>
                    <Link to='/dashboard'><button>Register</button></Link>
                    </div>

                </div>
            </div>
        )
    }

}