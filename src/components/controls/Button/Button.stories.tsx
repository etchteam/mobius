import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import Button from './Button';

import Icon from 'components/content/Icon/Icon';

export default {
  title: 'Controls/Button',
  component: Button,
} as Meta;

export function Types() {
  return (
    <>
      <Button>Button</Button> <Button type="primary">Button</Button>{' '}
      <Button type="secondary">Button</Button>{' '}
      <Button type="positive">Button</Button>{' '}
      <Button type="negative">Button</Button>{' '}
      <Button type="primary" icon>
        <Icon icon="edit" title="Moderate" />
      </Button>
    </>
  );
}

export function Disabled() {
  return (
    <>
      <Button disabled>Button</Button>{' '}
      <Button type="primary" disabled>
        Button
      </Button>{' '}
      <Button type="secondary" disabled>
        Button
      </Button>{' '}
      <Button type="positive" disabled>
        Button
      </Button>{' '}
      <Button type="negative" disabled>
        Button
      </Button>{' '}
      <Button type="primary" icon disabled>
        <Icon icon="edit" title="Moderate" />
      </Button>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Button size="small">Button</Button> <Button>Button</Button>
    </>
  );
}

export function Block() {
  return (
    <>
      <Button block>Button Block</Button>
      <br />
      <Button block="mobile">Button Block Mobile</Button>
    </>
  );
}
