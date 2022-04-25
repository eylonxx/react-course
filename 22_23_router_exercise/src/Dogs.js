/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import lulu from './imgs/lulu.jpg';
import chippy from './imgs/chippy.jpg';
import chanel from './imgs/chanel.jpg';
import joy from './imgs/joy.jpg';

export default function Dogs() {
  const dogs = [
    {
      name: 'Chanel',
      age: 3,
      src: chanel,
      facts: ['ארנב', 'יותר חכמה מאיינשטיין', 'מנהיגה רוחנית'],
    },
    {
      name: 'Joy',
      age: 4,
      src: joy,
      facts: ['זנב בצורה של דגל', 'חמודה', 'מפחדת מבאדי'],
    },
    {
      name: 'lulu',
      age: 0.8,
      src: lulu,
      facts: ['צריכה אורתודנט', 'מכוערת אבל חמודה', 'שמנה'],
    },
    {
      name: 'Chippy',
      age: 0.8,
      src: chippy,
      facts: ['ציפי', 'פוקו פוקו', 'ציפיייייייייייייייי'],
    },
  ];
  const getDogs = () => {
    return dogs.map((dog) => {
      return (
        <li className="nav-item">
          <a className="nav-link">
            <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
          </a>
        </li>
      );
    });
  };
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">{getDogs()}</ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      </Routes>
    </div>
  );
}
