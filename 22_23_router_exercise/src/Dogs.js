/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import whiskey from './imgs/whiskey.jpg';
import tubby from './imgs/tubby.jpg';
import hazel from './imgs/hazel.jpg';

export default function Dogs() {
  const dogs = [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: ['Whiskey loves eating popcorn.', 'Whiskey is a terrible guard dog.', 'Whiskey wants to cuddle with you!'],
    },
    {
      name: 'Hazel',
      age: 3,
      src: hazel,
      facts: ['Hazel has soooo much energy!', 'Hazel is highly intelligent.', 'Hazel loves people more than dogs.'],
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: ['Tubby is not the brightest dog', 'Tubby does not like walks or exercise.', 'Tubby loves eating food.'],
    },
  ];

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
              <ul className="navbar-nav">
                <li className="nav-item"></li>

                <li className="nav-item">
                  <a className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
      </Routes>
    </div>
  );
}
