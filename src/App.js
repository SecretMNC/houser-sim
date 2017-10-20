import React, { Component } from 'react';
import './App.css';
import router from './router'
class App extends Component {
  render() {
    return (
  <div classname = "App">
    {router}
  </div>
    );
  }
}

export default App;
