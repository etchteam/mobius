import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Card from './Card';

import Grid from 'components/composition/Grid/Grid';
import { base } from 'lib/theme';

export default {
  title: 'Components/Canvas/Card',
  component: Card,
  parameters: {
    docs: {
      theming: true,
    },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => (
  <Grid wrap>
    {base.map((theme) => (
      <Grid.Item key={theme} xs={12} md={4}>
        <Card className={`m-theme-${theme}`} {...args}>
          <Card.Header>
            <h2>Card title</h2>
          </Card.Header>
          <Card.Body>
            Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
            Pellentesque et metus nunc. Fusce ante arcu, mattis pretium semper
            ac, pretium vitae velit. Donec vitae eros et arcu accumsan auctor at
            id ipsum. Aliquam finibus, mi ac tincidunt blandit, purus elit
            ornare dui, nec dignissim mi ante sit amet mauris. Nulla eget dui in
            mauris tempus tincidunt a eget enim. Proin eu neque lorem. Sed quis
            tellus magna. Nunc scelerisque nisi eget dictum laoreet. Nullam
            aliquam et massa id euismod. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nulla vehicula ornare ligula nec rutrum.
            Maecenas convallis rutrum metus sed ultricies.
          </Card.Body>
        </Card>
      </Grid.Item>
    ))}
  </Grid>
);

export const Default = Template.bind({});

export const Border = Template.bind({});
Border.args = { border: true };

export const Link = Template.bind({});
Link.args = { border: true, href: '#somewhere' };

export const Arrow = Template.bind({});
Arrow.args = {
  border: true,
  arrow: true,
  onClick: () => {
    console.log('clicked');
  },
};

export const MutedBody = () => (
  <Grid>
    {themes.map((theme) => (
      <Grid.Item key={theme} xs={12} md={4} flex>
        <Card border className={`m-theme-${theme}`}>
          <Card.Header>
            <h2>Card title</h2>
          </Card.Header>
          <Card.Body muted>
            Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
            Pellentesque et metus nunc. Fusce ante arcu, mattis pretium semper
            ac, pretium vitae velit. Donec vitae eros et arcu accumsan auctor at
            id ipsum. Aliquam finibus, mi ac tincidunt blandit, purus elit
            ornare dui, nec dignissim mi ante sit amet mauris. Nulla eget dui in
            mauris tempus tincidunt a eget enim. Proin eu neque lorem. Sed quis
            tellus magna. Nunc scelerisque nisi eget dictum laoreet.
          </Card.Body>
        </Card>
      </Grid.Item>
    ))}
  </Grid>
);
