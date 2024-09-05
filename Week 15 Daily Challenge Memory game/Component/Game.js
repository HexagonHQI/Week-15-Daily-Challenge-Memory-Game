// src/Game.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import superheroes from './data';
import shuffleArray from './shuffleArray'; // You can keep this function as is

const Game = () => {
  const [cards, setCards] = useState(shuffleArray(superheroes));
  const [clicked, setClicked] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const handleCardClick = (id) => {
    const cardClicked = cards.find(card => card.id === id);

    if (cardClicked.clicked) {
      setCurrentScore(0);
      setClicked(new Set());
      setCards(cards.map(card => ({ ...card, clicked: false })));
      alert("You've clicked this card before!");
    } else {
      setClicked(prevClicked => new Set(prevClicked.add(id)));
      setCurrentScore(currentScore + 1);
      setCards(shuffleArray(cards.map(card => card.id === id ? { ...card, clicked: true } : card)));
    }

    if (currentScore + 1 > topScore) {
      setTopScore(currentScore + 1);
    }
  };

  return (
    <div>
      <Navbar currentScore={currentScore} topScore={topScore} />
      <div className="card-container">
        {cards.map(superhero => (
          <Card
            key={superhero.id}
            superhero={superhero}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
