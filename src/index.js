
import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root'))
