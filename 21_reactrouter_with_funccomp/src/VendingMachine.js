import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cake from './Cake';

export default function VendingMachine() {
  return (
    <div>
      <Routes>
        <Route path="/home/:id" element={<Cake />} />
      </Routes>
    </div>
  );
}
