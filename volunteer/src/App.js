import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Landing} from './Landing/Landing.js';
import { Dashboard } from './Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/" component={ Landing }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
