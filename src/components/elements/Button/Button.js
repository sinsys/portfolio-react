import React from 'react';
import './Button.scss';

function Button(props) {
  return (
    <div className="Button__wrapper">
      <div role="button" className="Button">
        <div className="spin-effect"></div>
        <a href="/">{props.text}</a>
      </div>
    </div>
  );
}

export default Button;
