import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  it('Hero renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Hero />,
      div
    );
  });
});