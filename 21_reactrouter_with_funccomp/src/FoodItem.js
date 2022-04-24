import React from 'react';
import { useParams } from 'react-router-dom';

export default function FoodItem() {
  const { food } = useParams();
  const url = `https://source.unsplash.com/featured?${food}`;
  return <img src={url} alt={food} />;
}
