import { Meta } from '@storybook/react';
import React from 'react';

import ContainerSvg from './ContainerSvg';

import Grid from 'components/composition/Grid/Grid';

export default {
  title: 'Components/Content/ContainerSvg',
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
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Single Food Caddy" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Single Box" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Single Carrier Bag" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Trollibox" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Bundle" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Roll Cage" />
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
      <ContainerSvg
        name="Inner Caddy"
        bodyColour="black"
        secondaryColour="pink"
      />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg
        name="Kerbside Caddy"
        bodyColour="green"
        lidColour="red"
        secondaryColour="yellow"
      />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg
        name="Kitchen Caddy"
        bodyColour="greenDark"
        lidColour="greenDark"
        secondaryColour="greyLight"
      />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg
        name="Reusable Sack"
        bodyColour="green"
        secondaryColour="blueDark"
      />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg
        name="Householder Provided Carrier Bag"
        bodyColour="orange"
        secondaryColour="duckEgg"
      />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Bundle" bodyColour="brown" />
    </Grid.Item>
    <Grid.Item xs={12} md={3}>
      <ContainerSvg name="Roll Cage" bodyColour="purple" />
    </Grid.Item>
  </Grid>
);
