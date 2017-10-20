import React ,{Component} from 'react';
import NavBar from './NavBar';
import {Link } from 'react-router-dom';

export default class Step3 extends Component{
    render(){
        return (
            <div>
                <NavBar/>
           <Link to='/step4'> <h2>
                this is step 3

            </h2></Link>
            </div>
        )
    }
}