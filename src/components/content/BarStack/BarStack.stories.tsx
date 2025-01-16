import { Meta } from '@storybook/react';
import React from 'react';

import BarStack from './BarStack';

export default {
  title: 'Components/Content/Bar Stack',
  component: BarStack,
  subcomponents: {
    BarStackItem: BarStack.Item,
  },
} as Meta;

export const Default = (args: {
  readonly children?: React.ReactNode;
  readonly compact?: boolean;
  readonly width?: number;
}) => {
  return (
    <BarStack {...args}>
      <BarStack.Item color="dry-stream" size={20} />
      <BarStack.Item color="residual-stream" size={20} />
      <BarStack.Item color="food-stream" size={20} />
      <BarStack.Item color="garden-stream" size={20} />
    </BarStack>
  );
};

Default.storyName = 'Bar Stack';

Default.args = {
  compact: false,
  width: 100,
};

export const Compact = () => {
  return (
    <BarStack compact>
      <BarStack.Item color="dry-stream" size={20} />
      <BarStack.Item color="residual-stream" size={20} />
      <BarStack.Item color="organic-stream" size={20} />
    </BarStack>
  );
};
