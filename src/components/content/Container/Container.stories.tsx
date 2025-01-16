import { Meta } from '@storybook/react';
import React from 'react';

import Container from './Container';

export default {
  title: 'Components/Content/Container',
  component: Container,
} as Meta;

export const Default = () => (
  <Container
    name="Wheeled Bin"
    displayName="Wheeled Bin (140L+)"
    bodyColour="#3cb848"
  />
);
