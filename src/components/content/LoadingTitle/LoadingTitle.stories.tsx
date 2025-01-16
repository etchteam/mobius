import { Meta } from '@storybook/react';
import React from 'react';

import LoadingTitle from './LoadingTitle';

export default {
  title: 'Components/Content/Loading Title',
  component: LoadingTitle,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'empty-heading',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = () => (
  <>
    <LoadingTitle chars={50} as="h1" />
    <LoadingTitle chars={50} as="h2" />
    <LoadingTitle chars={50} as="h3" />
    <LoadingTitle chars={50} as="h4" />
    <LoadingTitle chars={50} as="h5" />
  </>
);

Default.storyName = 'Loading Title';
