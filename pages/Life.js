// pages/Life.js
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Button from '../components/Button';

const Life = () => {
  return (
    <div className="life">
      <BackgroundImage />
      <h1>Leonardo da Vinci: A Life of Art, Science, and Invention</h1>
      <p>Born in 1452 in Vinci, Italy, Leonardo da Vinci was a true Renaissance man.</p>
      <Button href="/about" label="Learn More">Explore Leonardo's Life and Work</Button>
    </div>
  );
};

export default Life;