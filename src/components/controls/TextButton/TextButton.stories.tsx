import { Meta } from '@storybook/react';
import React from 'react';

import TextButton from './TextButton';

export default {
  title: 'Components/Controls/Text button',
  component: TextButton,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Temporarily disable
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = () => (
  <TextButton icon="chevron-down">TextButton label</TextButton>
);

export const IconRight = () => (
  <TextButton icon="chevron-down" iconRight>
    TextButton label
  </TextButton>
);

export const Decorate = () => (
  <TextButton decorate>TextButton decorate</TextButton>
);
