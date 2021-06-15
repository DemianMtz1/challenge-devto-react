import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Navbar />
    
  </Router>,
  document.getElementById('root')
);