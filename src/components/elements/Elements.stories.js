import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button/Button';
import './Button/Button.scss';

export default {
  title: 'Elements'
};

export const ButtonSlide = () => (
  <Button 
    text='Slide Button'
    type='slide'
    action={action("Clicked Slide Button")}
  />
);

export const ButtonDisabled = () => (
  <Button 
    text='Slide Button'
    type='disabled'
    disabled={true}
    action={action("Clicked Slide Button")}
  />
);

ButtonSlide.story = {
  name: 'Slide Button'
};

ButtonDisabled.story = {
  name: 'Disabled Button'
}