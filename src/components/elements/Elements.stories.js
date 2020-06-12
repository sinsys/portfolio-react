import React from 'react';
import { action } from '@storybook/addon-actions';
import { styled } from '@storybook/theming';

import Button from './Button/Button';
import './Button/Button.scss';

import Icon from './Icon/Icon';
import './Icon/Icon.scss';
import jQuery from 'assets/icons/jquery.svg';
import Angular from 'assets/icons/angular.svg';
import JavaScript from 'assets/icons/javascript.svg';
import ReactIcon from 'assets/icons/react.svg';

export default {
  title: 'Elements'
};

const ViewPort = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flexWrap: 'wrap'
}));

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


const JQueryIcon = () => <img src={jQuery} alt="jQuery" />;
const AngularIcon = () => <img src={Angular} alt="Angular" />;
const JavaScriptIcon = () => <img src={JavaScript} alt="JavaScript" />;
const ReactJsIcon = () => <img src={ReactIcon} alt="React" />;

export const IconImage = () => (
  <ViewPort>
    <Icon 
      icon={<JQueryIcon />}
      size='small'
    />
    <Icon 
      icon={<JQueryIcon />}
      size='medium'
    />
    <Icon 
      icon={<JQueryIcon />}
      size='large'
    />
    <Icon 
      icon={<JQueryIcon />}
      size='xlarge'
    />
    <Icon 
      icon={<AngularIcon />}
      size='small'
    />
    <Icon 
      icon={<AngularIcon />}
      size='medium'
    />
    <Icon 
      icon={<AngularIcon />}
      size='large'
    />
    <Icon 
      icon={<AngularIcon />}
      size='xlarge'
    />
    <Icon 
      icon={<JavaScriptIcon />}
      size='small'
    />
    <Icon 
      icon={<JavaScriptIcon />}
      size='medium'
    />
    <Icon 
      icon={<JavaScriptIcon />}
      size='large'
    />
    <Icon 
      icon={<JavaScriptIcon />}
      size='xlarge'
    />
    <Icon 
      icon={<ReactJsIcon />}
      size='small'
    />
    <Icon 
      icon={<ReactJsIcon />}
      size='medium'
    />
    <Icon 
      icon={<ReactJsIcon />}
      size='large'
    />
    <Icon 
      icon={<ReactJsIcon />}
      size='xlarge'
    />
  </ViewPort>
);

ButtonSlide.story = {
  name: 'Button - Slide'
};

ButtonDisabled.story = {
  name: 'Button - Disabled'
}

IconImage.story = {
  name: 'Icon - Image'
}