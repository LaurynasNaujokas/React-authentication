import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';


import Register from './components/register';
import Login from './components/login';
import Home from './components/home';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


//Next import Router

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <Home />
          <Register />
          <Login />
        </div>
    );
  }
}

export default App;