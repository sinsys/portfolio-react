import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from 'components/elements/Button/Button';
import './Button.scss';

const styles = {
  textAlign: 'center',
  backgroundColor: '#333333',
  minHeight: '100%'
};

const Viewport = ({ children }) => {
  return (
    <div style={styles}>
      {children}
    </div>
  );
};

export default {
  title: 'Button',
  component: Button,
  story: {
    name: 'Button'
  }
};

export const Slide = () => (
  <Viewport>
    <Button 
      text='Slide Button'
      type='slide'
      action={action("Clicked Slide Button")}
    />
  </Viewport>

);