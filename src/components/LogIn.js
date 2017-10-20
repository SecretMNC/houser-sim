import React ,{Component} from 'react';
import {Link} from 'react-router-dom'

export default class Login extends Component{
    render(){
        return (
          <Link to ='/dashboard'>  <h2>this is the login page</h2></Link>
        )
    }
    
}