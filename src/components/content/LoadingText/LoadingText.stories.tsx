import { Meta } from '@storybook/react';
import React from 'react';

import LoadingText from './LoadingText';

import Spacing from 'components/composition/Spacing/Spacing';

export default {
  title: 'Components/Content/Loading Text',
  component: LoadingText,
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
    <LoadingText chars={350} />
    <Spacing bottom="md" />
    <LoadingText chars={50} as="h2" />
    <Spacing bottom="md" />
    <LoadingText chars={20} as="p" />
  </>
);

Default.storyName = 'Loading Text';
