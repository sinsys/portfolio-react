import React from 'react';
import Button from 'components/elements/Button/Button';
import './Hero.scss';

const Hero = (props) => {
  return (
    <div className="Hero">
      <h1 className="Hero-title">Hello, I'm Nicholas</h1>
      <p className="Hero-description">
        I develop&nbsp;
        <span className="color js-one">Java</span>
        <span className="color js-two">Script</span>
        &nbsp;Web Applications
      </p>
      <div className="Hero-button">
        <Button
          type='slide'
          text="Who am I?"
        />
      </div>
    </div>
  );
}

export default Hero;