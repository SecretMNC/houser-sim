import React ,{Component} from 'react';
import {Link } from 'react-router-dom';

export default class Step4 extends Component{
    render(){
        return (
          <Link to ='/step5'>  <h2>this is step 4</h2></Link>
        )
    }
}