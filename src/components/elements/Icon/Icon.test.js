import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';
import jQuery from 'assets/icons/jquery.svg';

describe('Icon Component', () => {
  it(`Icon renders without crashing`, () => {
    const div = document.createElement('div');
    const JQueryIcon = () => <img src={jQuery} alt="jQuery" />;
    ReactDOM.render(
      <Icon 
        icon={<JQueryIcon />}
        size='small'
      />,
      div
    );
  });
});