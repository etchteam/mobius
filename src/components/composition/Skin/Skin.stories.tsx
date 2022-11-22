import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Grid from 'components/composition/Grid/Grid';
import Section from 'components/canvas/Section/Section';
import Card from 'components/canvas/Card/Card';
import Spacing from 'components/composition/Spacing/Spacing';
import Button from 'components/controls/Button/Button';

import Skin, { skins } from './Skin';

export default {
  title: 'Composition/Skin',
  component: Skin,
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export function Default() {
  return (
    <Grid spacing="none" wrap>
      {skins.map((skin, i) => (
        <Grid.Item xs={12} md={6}>
          <Skin skin={skin}>
            <Section>
              <Spacing top="lg" bottom="lg" left="lg" right="lg">
                <Skin skin={skins[i + 1] || skins[0]}>
                  <Card border>
                    <Card.Body>
                      <h3>
                        Card title
                      </h3>
                      <p>
                        Aliquam egestas mi quam, a
                        {' '}
                        <a href="https://etch.co">tincidunt lectus</a>
                        {' '}
                        faucibus euismod.
                        Pellentesque et metus nunc.
                      </p>
                      <Spacing bottom="md" />
                      <Grid wrap direction="row-reverse">
                        <Grid.Item xs={12} md={6}>
                          <Button block type="primary">Button text</Button>
                        </Grid.Item>
                        <Grid.Item xs={12} md={6}>
                          <Button block>Button text</Button>
                        </Grid.Item>
                      </Grid>
                    </Card.Body>
                  </Card>
                </Skin>
              </Spacing>
            </Section>
          </Skin>
        </Grid.Item>
      ))}
    </Grid>
  );
}

Default.storyName = 'Skin';
