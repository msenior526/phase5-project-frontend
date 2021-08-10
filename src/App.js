import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
        </div>
    </Router>
    );
  }
}

export default App;
