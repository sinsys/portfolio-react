import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  return (
    <div 
      className={`Button ${props.type} ${props.size}`}
      disabled={props.disabled ? true : false}
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
  type: PropTypes.oneOf(['slide', 'disabled']).isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func
}

export default Button;
