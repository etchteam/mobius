import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import FormGroup from 'components/composition/FormGroup/FormGroup';

import Label from 'components/controls/Label/Label';
import Input from 'components/controls/Input/Input';

import HelpText from './HelpText';

export default {
  title: 'Content/Help text',
  component: HelpText,
} as Meta;

export const Default = () => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <Input id="my-input" name="my-input" />
    <HelpText>Some help text for this input</HelpText>
  </FormGroup>
);

export const Positive = () => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <Input id="my-input" name="my-input" />
    <HelpText type="positive">Yay, it worked!</HelpText>
  </FormGroup>
);

export const Negative = () => (
  <FormGroup>
    <Label htmlFor="my-input">Input label</Label>
    <Input id="my-input" name="my-input" />
    <HelpText type="negative">There was a problem</HelpText>
  </FormGroup>
);
