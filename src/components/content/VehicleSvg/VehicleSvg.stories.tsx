import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import VehicleSvg from './VehicleSvg';

import Grid from 'components/composition/Grid/Grid';

export default {
  title: 'Components/Content/VehicleSvg',
  component: VehicleSvg,
} as Meta;

export const Default: StoryFn = () => (
  <Grid wrap>
    <Grid.Item lg={3}>
      <VehicleSvg name="Five compartment stillage vehicle" color="dry-stream" />
    </Grid.Item>
    <Grid.Item lg={3}>
      <VehicleSvg
        name="65-35 split 2 compartment RCV"
        color="residual-stream"
      />
    </Grid.Item>
    <Grid.Item lg={3}>
      <VehicleSvg name="Small single compartment RCV" color="food-stream" />
    </Grid.Item>
    <Grid.Item lg={3}>
      <VehicleSvg
        name="Single compartment RCV with recycling compaction"
        color="garden-stream"
      />
    </Grid.Item>
  </Grid>
);

Default.storyName = 'VehicleSvg';
