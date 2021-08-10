import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
    </Router>
    );
  }
}

export default App;
