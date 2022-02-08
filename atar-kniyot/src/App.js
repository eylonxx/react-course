import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Navbar';
import Item from './Item';
import React, { Component } from 'react';
import ItemGroup from './ItemGroup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <CustomNavbar />
        </header>
        <ItemGroup cols="4" />
      </div>
    );
  }
}

export default App;
