import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DogDetails(props) {
  const { name } = useParams();
  const navigate = useNavigate();
  let chosenDog = props.dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={chosenDog.src} className="card-img-top" alt={chosenDog.name} />
        <div className="card-body">
          <h5 className="card-title">{chosenDog.name}</h5>
          {chosenDog.facts.map((fact) => {
            return <p className="card-text">{fact}</p>;
          })}
        </div>
      </div>
      <button onClick={() => navigate('/dogs')}>go back</button>
    </div>
  );
}
