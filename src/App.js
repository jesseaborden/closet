import React, { Component } from 'react';
import './App.css';

import Nav from './components/sharedComponents/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
