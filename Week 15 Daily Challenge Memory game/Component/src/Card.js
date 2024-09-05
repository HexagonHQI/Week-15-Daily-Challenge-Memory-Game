// src/Card.js
import React from 'react';

const Card = ({ superhero, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(superhero.id)}>
      <img src={superhero.image} alt={superhero.name} />
      <p>{superhero.name}</p>
      <p>{superhero.occupation}</p>
    </div>
  );
};

export default Card;
