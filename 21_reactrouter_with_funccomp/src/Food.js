import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FoodSearch from './FoodSearch';
import FoodItem from './FoodItem';

export default function Food() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FoodSearch />} />
        <Route path="/:food" element={<FoodItem />} />
      </Routes>
    </div>
  );
}
