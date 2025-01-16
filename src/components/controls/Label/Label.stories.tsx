import { Meta } from '@storybook/react';
import React from 'react';

import Label from './Label';

export default {
  title: 'Components/Controls/Label',
  component: Label,
} as Meta;

export function Primary() {
  return <Label htmlFor="my-input">Label</Label>;
}

export function Secondary() {
  return (
    <Label htmlFor="my-input" type="secondary">
      Label
    </Label>
  );
}
