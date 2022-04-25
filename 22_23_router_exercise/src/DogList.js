import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function DogList(props) {
  const navigate = useNavigate();
  const getDogs = () => {
    return props.dogs.map((dog) => (
      <div
        onClick={() => {
          navigate(`/dogs/${dog.name}`);
        }}
        className="card"
        style={{ width: '18rem' }}
      >
        <img src={dog.src} height="286px" className="card-img-top" alt={dog.name} />
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          {dog.facts.map((fact) => {
            return <p className="card-text">{fact}</p>;
          })}
        </div>
      </div>
    ));
  };
  return <div className="DogList d-flex gap-2 justify-content-center">{getDogs()}</div>;
}
