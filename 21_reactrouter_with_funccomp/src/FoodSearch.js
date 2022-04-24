import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FoodItem from './FoodItem';

export default function FoodSearch() {
  const [val, setVal] = useState('');

  return (
    <div>
      <input onChange={(e) => setVal(e.target.value)} value={val} />
      <h3>
        <Link to={`/${val}`}>lol</Link>
      </h3>
    </div>
  );
}
