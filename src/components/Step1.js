import React ,{Component} from 'react';
import NavBar from './NavBar';
import {Link } from 'react-router-dom';

export default class Step1 extends Component{
    render(){
        return (
            <div>
                <NavBar/>
            <Link to = '/step2'><h2>this is step 1

            </h2></Link>
            </div>
        )
    }
}