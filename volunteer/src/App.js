import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Landing} from './Landing/Landing.js';
import { HomeNav } from './Home/home-nav';
import { Dashboard } from './Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/test" component={ HomeNav } />
          <Route path="/" component={ Dashboard }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
