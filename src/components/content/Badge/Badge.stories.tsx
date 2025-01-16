import { Meta } from '@storybook/react';
import React from 'react';

import Badge, { BadgeProps } from './Badge';

import Grid from 'components/composition/Grid/Grid';
import { emphasis } from 'lib/theme';

export default {
  title: 'Components/Content/Badge',
  component: Badge,
  parameters: {
    docs: {
      theming: true,
    },
  },
} as Meta;

export const Default = (args: BadgeProps) => (
  <Grid wrap>
    {emphasis.map((theme) => (
      <Grid.Item key={theme}>
        <Badge
          className={`m-theme-${theme} m-text-transform-capitalize`}
          {...args}
        >
          {theme}
        </Badge>
      </Grid.Item>
    ))}
  </Grid>
);

Default.storyName = 'Badge';

Default.args = {
  size: 'base',
  rounded: false,
};
