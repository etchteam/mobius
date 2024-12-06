import { Meta } from '@storybook/react';
import React from 'react';

import BarStack from './BarStack';

export default {
  title: 'Content/Bar Stack',
  component: BarStack,
  subcomponents: {
    BarStackItem: BarStack.Item,
  },
} as Meta;

export const Default = () => {
  return (
    <BarStack>
      <BarStack.Item color="dry-stream" size={20} />
      <BarStack.Item color="residual-stream" size={20} />
      <BarStack.Item color="food-stream" size={20} />
      <BarStack.Item color="garden-stream" size={20} />
    </BarStack>
  );
};

Default.storyName = 'Bar Stack';

export const Compact = () => {
  return (
    <BarStack compact>
      <BarStack.Item color="dry-stream" size={25} />
      <BarStack.Item color="residual-stream" size={25} />
      <BarStack.Item color="organic-stream" size={25} />
    </BarStack>
  );
};
