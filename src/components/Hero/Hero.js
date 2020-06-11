import React from 'react';
import Button from 'components/elements/Button/Button';
import ProfilePic from 'assets/images/profile_pic.jpg';
import './Hero.scss';

const Hero = (props) => {
  return (
    <div className="Hero">
      <div className="Hero-image">
        <img src={ProfilePic} alt="Nicholas Hazel" />
      </div>
      <h1 className="Hero-title">Hello, I'm&nbsp;
        <span className="color blue">Nicholas</span>
      </h1>
      <p className="Hero-description">
        I develop&nbsp;
        <span className="color js-one">Java</span>
        <span className="color js-two">Script</span>
        &nbsp;Web Applications
      </p>
      <div className="Hero-button">
        <Button
          size='medium'
          type='slide'
          text="Who am I?"
        />
      </div>
    </div>
  );
}

export default Hero;