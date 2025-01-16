import { Meta } from '@storybook/react';
import React from 'react';

import Grid from './Grid';

import Card from 'components/canvas/Card/Card';

export default {
  title: 'Components/Composition/Grid',
  component: Grid,
  subcomponents: {
    GridItem: Grid.Item,
  },
} as Meta;

export function Default() {
  const items = [
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    { xs: 12, sm: 6 },
    { xs: 12, sm: 7 },
    { xs: 12, sm: 5 },
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
  ];
  return (
    <Grid wrap>
      {items.map((item, i) => (
        <Grid.Item {...item} key={i} flex>
          <Card>
            <Card.Header>
              <h3>Card title</h3>
            </Card.Header>
            <Card.Body>
              <p>
                Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
                Pellentesque et metus nunc.
              </p>
            </Card.Body>
          </Card>
        </Grid.Item>
      ))}
    </Grid>
  );
}

Default.storyName = 'Grid';
