import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import ContainerSvg from './ContainerSvg';

import Grid from 'components/composition/Grid/Grid';

export default {
  title: 'Content/ContainerSvg',
  component: ContainerSvg,
} as Meta;

export const Types = () => (
  <Grid wrap>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Box" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Wheeled Bin" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Communal Wheeled Bin" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Inner Caddy" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Kerbside Caddy" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Kitchen Caddy" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Reusable Sack" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Householder Provided Carrier Bag" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Single Sack" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Large Wheeled Bin" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Skip" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Front End Load" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Rear End Loader" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Roll On Roll Off" />
    </Grid.Item>
  </Grid>
);

export const Coloured = () => (
  <Grid wrap>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Box" bodyColour="orange" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Wheeled Bin" bodyColour="yellow" lidColour="red" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg
        name="Communal Wheeled Bin"
        bodyColour="green"
        lidColour="red"
      />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Inner Caddy" bodyColour="black" lidColour="red" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Kerbside Caddy" bodyColour="green" lidColour="red" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Kitchen Caddy" bodyColour="green" lidColour="red" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Reusable Sack" bodyColour="green" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg
        name="Householder Provided Carrier Bag"
        bodyColour="orange"
      />
    </Grid.Item>
  </Grid>
);
