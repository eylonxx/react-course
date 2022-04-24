import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

export default function FoodItem() {
  const { food } = useParams();
  const navigate = useNavigate();
  const url = `https://source.unsplash.com/featured?${food}`;

  return /\d/.test(food) ? (
    <Navigate replace to="/" />
  ) : (
    <div>
      <img src={url} alt={food} />
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}
