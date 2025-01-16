import { Meta } from '@storybook/react';
import React from 'react';

import Textarea from './Textarea';

export default {
  title: 'Components/Controls/Textarea',
  component: Textarea,
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
  return <Textarea name="my-input" id="my-input" />;
}

Default.storyName = 'Textarea';
