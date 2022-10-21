import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Textarea from './Textarea';

export default {
  title: 'Controls/Textarea',
  component: Textarea,
} as Meta;

export function Default() {
  return <Textarea name="my-input" id="my-input" />;
}

Default.storyName = 'Textarea';
