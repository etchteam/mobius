import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Grid from 'components/composition/Grid/Grid';
import Card from 'components/canvas/Card/Card';
import Button from 'components/controls/Button/Button';
import Spacing from 'components/composition/Spacing/Spacing';

import Enter from './Enter';

export default {
  title: 'Composition/Enter',
  component: Enter,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // a11y plugin has a problem with the fade
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as ComponentMeta<typeof Enter>;

const Template: ComponentStory<typeof Enter> = (args) => {
  const { delay } = args;
  const delayValue = (delay ? parseInt(delay, 10) : 1);

  return (
    <Grid wrap>
      {[0, 1, 2].map((item) => (
        <Grid.Item key={item} xs={12} md={4}>
          <Enter {...args} delay={`${(delayValue * item) * 0.2}s`}>
            <Card>
              <Card.Header>
                <h2>Card title</h2>
              </Card.Header>
              <Card.Body>
                <Spacing bottom="md">
                  <p>
                    Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
                    Pellentesque et metus nunc. Fusce ante arcu, mattis pretium
                    semper ac, pretium vitae velit. Donec vitae eros et arcu accumsan
                    auctor at id ipsum. Aliquam finibus, mi ac tincidunt blandit,
                    purus elit ornare dui, nec dignissim mi ante sit amet mauris.
                    Nulla eget dui in mauris tempus tincidunt a eget enim.
                  </p>
                </Spacing>
                <Button block="mobile">
                  Button text
                </Button>
              </Card.Body>
            </Card>
          </Enter>
        </Grid.Item>
      ))}
    </Grid>
  );
};

export const Fade = Template.bind({});

export const FadeInUp = Template.bind({});
FadeInUp.args = { type: 'fade-in-up' };

export const FadeInDown = Template.bind({});
FadeInDown.args = { type: 'fade-in-down' };

export const Boing = Template.bind({});
Boing.args = { type: 'boing' };
