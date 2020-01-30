import React, { Component } from 'react';
import './App.css';
import Authors from './components/Authors'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Authors/>
      </div>
    );
  }
}

export default App;
