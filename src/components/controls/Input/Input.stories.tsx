import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Input from './Input';

export default {
  title: 'Controls/Input',
  component: Input,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export function Default() {
  return <Input name="my-input" id="my-input" icon="search" />;
}

export function Prefix() {
  return <Input name="my-input" id="my-input" prefix="£" />;
}