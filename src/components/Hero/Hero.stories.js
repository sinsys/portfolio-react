import React from 'react';
import Hero from './Hero';
import './Hero.scss';

export default {
  title: 'Hero'
};

export const HeroStory = () => (
  <Hero />
);

HeroStory.story = {
  name: 'Hero'
};