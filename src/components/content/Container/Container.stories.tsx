import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Container from './Container';

export default {
  title: 'Content/Container',
  component: Container,
} as Meta;

export const Default = () => (
  <Container
    name="Wheeled Bin"
    displayName="Wheeled Bin (140L+)"
    bodyColour="#3cb848"
  />
);
