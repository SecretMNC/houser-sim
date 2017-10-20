import React ,{Component} from 'react';
import {Link } from 'react-router-dom';

export default class Step2 extends Component{
    render(){
        return (
            <Link to = '/step3'><h2>
                this is step 2
            </h2></Link>
        )
    }
}