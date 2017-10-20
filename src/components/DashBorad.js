import React ,{Component} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

export default class DashBoard extends Component{
    render(){
        return (
            <div>
         <NavBar/>
           <Link to='/step1'> <h2>this is the dashboard page </h2></Link>

           </div>
        )
    }
}