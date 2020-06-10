import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from 'components/elements/Button/Button';

export default {
  title: 'Button',
  component: Button,
  story: {
    name: 'Button'
  }
};

export const Text = () => (
  <Button 
    text='Text Button'
    action={action("Clicked Text Button")}
  />
);

export const Link = () => (
  <Button 
    text='Link Button'
    action={action("Clicked Link Button")}
  />
);