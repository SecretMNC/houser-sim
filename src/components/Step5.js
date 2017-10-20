import React ,{Component} from 'react';
import NavBar from './NavBar';
import {Link } from 'react-router-dom';

export default class Step5 extends Component{
    render(){
        return (
            <div>
                <NavBar/>
            <Link to ='/dashboard'><h2>this is step 5</h2></Link>
            </div>
        )
    }
}