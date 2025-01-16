import { Meta } from '@storybook/react';
import React from 'react';

import Label from '../Label/Label';

import Checkbox from './Checkbox';

import FormGroup from 'components/composition/FormGroup/FormGroup';
import Grid from 'components/composition/Grid/Grid';

export default {
  title: 'Components/Controls/Checkbox',
  component: Checkbox,
  parameters: {
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
    <Checkbox name="checkbox" id="checkbox">
      Checkbox label
    </Checkbox>
  );
}

Default.storyName = 'Checkbox';

export function Checked() {
  return (
    <FormGroup horizontal as="fieldset">
      <FormGroup.Label as="legend">
        <Label as="span">Label</Label>
      </FormGroup.Label>
      <FormGroup.Control>
        <Grid wrap>
          <Grid.Item xs={12}>
            <Checkbox name="checkbox" forceChecked touched valid>
              Checkbox label
            </Checkbox>
          </Grid.Item>
          <Grid.Item xs={12}>
            <Checkbox name="checkbox" touched valid>
              A really long checkbox label that wraps onto another line if it
              needs to
            </Checkbox>
          </Grid.Item>
        </Grid>
      </FormGroup.Control>
    </FormGroup>
  );
}

export function TypeInput() {
  return (
    <Checkbox name="checkbox" type="input">
      Checkbox label
    </Checkbox>
  );
}

export function TypeList() {
  return (
    <Grid wrap>
      <Grid.Item xs={12}>
        <Checkbox name="checkbox" type="list">
          Checkbox label
        </Checkbox>
      </Grid.Item>
      <Grid.Item xs={12}>
        <Checkbox name="checkbox" type="list">
          Checkbox label
        </Checkbox>
      </Grid.Item>
    </Grid>
  );
}
