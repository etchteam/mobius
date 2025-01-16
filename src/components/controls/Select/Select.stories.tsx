import { Meta } from '@storybook/react';
import React from 'react';

import Select from './Select';

export default {
  title: 'Components/Controls/Select',
  component: Select,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'label',
            enabled: false,
          },
          {
            // Temporary disable
            id: 'select-name',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export function Default() {
  return (
    <Select name="select" id="select">
      <option>Please select</option>
    </Select>
  );
}

Default.storyName = 'Select';
