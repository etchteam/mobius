import { Meta } from '@storybook/react';
import map from 'lodash/map';
import React from 'react';

import Card from '../../../components/canvas/Card/Card';
import Grid from '../../../components/composition/Grid/Grid';

import colors from './colors.module.scss';

export default {
  title: 'Foundations/Tokens/Colors',
} as Meta;

export const Colors = () => (
  <Grid wrap>
    {map(colors, (color, key) => (
      <Grid.Item key={key} xs={12} sm={6} md={4} lg={3}>
        <Card border>
          <div
            style={{
              height: '10rem',
              background: color,
            }}
          />
          <Card.Body>
            <div className="m-text-align-center m-text-size-h3" title={color}>
              {key}
            </div>
          </Card.Body>
        </Card>
      </Grid.Item>
    ))}
  </Grid>
);
