import React, { Component } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Apple from './apple';
export default class VendingMachine extends Component {
  render() {
    let activeStyle = {
      color: 'red',
    };
    return (
      <div>
        <h1>Vending machine!</h1>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/sardines">
          Sardines
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/chips">
          Chips
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/cakes">
          Cakes
        </NavLink>

        <Routes>
          <Route
            path="/sardines"
            element={
              <div>
                <h2>sardines</h2>
                <Link to="/">Go back</Link>
              </div>
            }
          />
          <Route path="/chips" element={<Apple title={RouterProps} />} />
          <Route
            path="/cakes"
            element={
              <div>
                <h2>cakes</h2>
                <Link to="/">Go back</Link>
              </div>
            }
          />
          <Route path="/" element={<h2>HOME</h2>} />
        </Routes>
      </div>
    );
  }
}
