import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

describe('Button Component', () => {
  it('Button renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});