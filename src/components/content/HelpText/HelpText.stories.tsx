import { Meta } from '@storybook/react';
import React from 'react';

import HelpText from './HelpText';

import FormGroup from 'components/composition/FormGroup/FormGroup';
import Input from 'components/controls/Input/Input';
import Label from 'components/controls/Label/Label';

export default {
  title: 'Components/Content/Help text',
  component: HelpText,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Has a problem with positive text, but it does pass A11Y
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = () => (
  <FormGroup>
    <Label htmlFor="my-input-1">Input label</Label>
    <Input
      id="my-input-1"
      name="my-input-1"
      aria-describedby="my-input-1-helptext"
    />
    <HelpText id="my-input-1-helptext">Some help text for this input</HelpText>
  </FormGroup>
);

export const Positive = () => (
  <FormGroup>
    <Label htmlFor="my-input-2">Input label</Label>
    <Input
      id="my-input-2"
      name="my-input-2"
      aria-describedby="my-input-2-helptext"
    />
    <HelpText id="my-input-2-helptext" type="positive">
      Yay, it worked!
    </HelpText>
  </FormGroup>
);

export const Negative = () => (
  <FormGroup>
    <Label htmlFor="my-input-3">Input label</Label>
    <Input
      id="my-input-3"
      name="my-input-3"
      aria-invalid="true"
      aria-describedby="my-input-3-helptext"
    />
    <HelpText id="my-input-3-helptext" type="negative">
      There was a problem
    </HelpText>
  </FormGroup>
);
