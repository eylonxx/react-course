import React from 'react';
import { useParams } from 'react-router-dom';

export default function Cake() {
  let params = useParams();
  console.log(JSON.stringify(params));
  return <div>Cake</div>;
}
