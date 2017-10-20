import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/LogIn';
import Dashboard from './components/DashBorad';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

//import all components

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/step1' component={Step1}/>
        <Route path='/step2' component={Step2}/>
        <Route path='/step3' component={Step3}/>
        <Route path='/step4' component={Step4}/>
        <Route path='/step5' component={Step5}/>
    </Switch>
)