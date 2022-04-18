import React, { Component } from 'react';
import Jokelist from './Jokelist';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Jokelist />
      </div>
    );
  }
}
