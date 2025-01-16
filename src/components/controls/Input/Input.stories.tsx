import { Meta } from '@storybook/react';
import React from 'react';

import Icon from '../../content/Icon/Icon';

import Input from './Input';

export default {
  title: 'Components/Controls/Input',
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
  return (
    <Input
      name="my-input"
      id="my-input"
      prefix={<Icon icon="search" size="lg" />}
    />
  );
}

export function Prefix() {
  return <Input name="my-input" id="my-input" prefix="£" />;
}

export function Suffix() {
  return <Input name="my-input" id="my-input" suffix="kr" />;
}

export function SuffixAsIcon() {
  return (
    <Input
      name="my-input"
      id="my-input"
      suffix={<Icon icon="calendar" size="lg" />}
    />
  );
}
