import React, { useState } from 'react';
import './App.css';
import Editor from '../../components/editor/Editor';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../about/About';
import Home from '../home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
