import { Meta } from '@storybook/react';
import React from 'react';

import Label from '../Label/Label';

import Radio from './Radio';

import FormGroup from 'components/composition/FormGroup/FormGroup';
import Grid from 'components/composition/Grid/Grid';

export default {
  title: 'Components/Controls/Radio',
  component: Radio,
} as Meta;

export function Default() {
  return (
    <Radio name="Radio" id="Radio">
      Radio label
    </Radio>
  );
}

export function Checked() {
  return (
    <FormGroup horizontal>
      <FormGroup.Label>
        <Label id="a-label" as="span">
          Label
        </Label>
      </FormGroup.Label>
      <FormGroup.Control>
        <div role="radiogroup" aria-labelledby="a-label">
          <Grid wrap>
            <Grid.Item xs={12}>
              <Radio name="Radio" checked touched valid>
                Radio label
              </Radio>
            </Grid.Item>
            <Grid.Item xs={12}>
              <Radio name="Radio" touched valid>
                A really long radio label that wraps onto another line if it
                needs to
              </Radio>
            </Grid.Item>
          </Grid>
        </div>
      </FormGroup.Control>
    </FormGroup>
  );
}

Default.storyName = 'Radio';
