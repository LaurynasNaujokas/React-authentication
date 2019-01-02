import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Next import Router

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component= { Home } />
          <div className="container">
            <Route exact path="/register" component= { Register } />

            <Route exact path="/login" component= { Login } />
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;