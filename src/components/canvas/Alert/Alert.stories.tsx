import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Grid from 'components/composition/Grid/Grid';
import Skin, { emphasisSkins } from 'components/composition/Skin/Skin';
import Spacing from 'components/composition/Spacing/Spacing';
import Button from 'components/controls/Button/Button';

import Alert from './Alert';

export default {
  title: 'Canvas/Alert',
  component: Alert,
} as Meta;

export function Default() {
  return (
    <>
      {emphasisSkins.map((skin) => (
        <Spacing bottom="md" key={skin}>
          <Skin skin={skin}>
            <Alert>
              <Grid wrap>
                <Grid.Item grow shrink>
                  <strong>Alert title</strong>
                  <br />
                  <p>
                    Vivamus iaculis purus orci, ac mollis lectus porttitor et.
                    Integer ac risus a orci pharetra suscipit.
                  </p>
                </Grid.Item>
                <Grid.Item xs={12} md="auto">
                  <Button block="mobile">Button text</Button>
                </Grid.Item>
              </Grid>
            </Alert>
          </Skin>
        </Spacing>
      ))}
    </>
  );
}

Default.storyName = 'Alert';
