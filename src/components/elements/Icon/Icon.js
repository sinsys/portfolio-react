import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

function Icon(props) {
  return (
    <div 
      className={`Icon ${props.size}`}
    >
      {props.icon}
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.element,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
}

export default Icon;
