import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from 'components/content/Icon/Icon';
import Button from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // @TODO fix default and secondary button colour contrast
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export function Types() {
  return (
    <>
      <Button>Button</Button>
      {' '}
      <Button type="primary">Button</Button>
      {' '}
      <Button type="secondary">Button</Button>
      {' '}
      <Button type="positive">Button</Button>
      {' '}
      <Button type="negative">Button</Button>
      {' '}
      <Button type="primary" icon>
        <Icon icon="edit" title="Moderate" />
      </Button>
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
