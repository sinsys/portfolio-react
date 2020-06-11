import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  return (
    <div 
      className={`Button ${props.type}`}
      onClick={props.action 
        ? () => props.action
        : null
      }
    >
      {props.text}
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['slide']).isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button;
