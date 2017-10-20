import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

var complete = require("../assets/step_completed.png");
var active = require("../assets/step_active.png");
var inactive = require("../assets/step_inactive.png");

export default class Step2 extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <NavBar />
                    <Link to='/step3'><h2>
                        this is step 2
            </h2></Link>
                </div>
                <Link to='/'>
                    <button> Logout </button>
                </Link>

                <div className="middle-container">

                    <h2 className="head1"> Add new listing </h2>

                    <Link to='/step1' className="head2">Cancel  </Link>


                    <section className='inner-container'>


                        <h1 className="step">Step 2</h1>



                        <img src={complete} alt='complete' className="status1" />
                        <img src={active} alt='complete' className="status2" />
                        <img src={inactive} alt='complete' className="status3" />
                        <img src={inactive} alt='complete' className="status4" />
                        <img src={inactive} alt='complete' className="status5" />



                        <div className="field">
                            <h1>Address</h1>
                            <input className="stretch"></input>
                        </div>

                        <div className="field" className="row3">
                            <h1>City</h1>
                            <input></input>
                        </div>

                        <div className="field" className="row3">
                            <h1>State</h1>
                            <input></input>
                        </div>

                        <div className="field" className="row4">
                            <h1>Zip</h1>
                            <input ></input>
                        </div>

                        <Link to='/step1' className="navbutton">
                            <button>
                                Previous Step
                     </button>
                        </Link>

                        <Link to='/step3' className="navbutton">
                            <button >
                                Next Step
                    </button>
                        </Link>
                    </section>
                </div>
            </div >

        )
    }
}