import { Meta } from '@storybook/react';
import React from 'react';

import Spacing from './Spacing';

export default {
  title: 'Components/Composition/Spacing',
  component: Spacing,
} as Meta;

export function Default() {
  return (
    <Spacing top="md" bottom="md" left="md" right="md">
      Add spacing on any side
    </Spacing>
  );
}

Default.storyName = 'Spacing';
