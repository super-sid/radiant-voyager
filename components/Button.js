// Button.js

import React from 'react';

const Button = ({ text, onPress }) => {
  return (
    <button onClick={onPress}>{text}</button>
  );
};

export default Button;
// pages/About.js
import React from 'react';
import Button from './Button';

const About = () => {
  return (
    <div>
      <h1>About Leonardo da Vinci</h1>
      <p>This is an about page for Leonardo da Vinci.</p>
      <Button text="Learn More" onPress={() => console.log('Button pressed')} />
    </div>
  );
};

export default About;