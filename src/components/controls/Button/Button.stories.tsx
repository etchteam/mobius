import { Meta } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import Button from './Button';

import Section from 'components/canvas/Section/Section';
import Spacing from 'components/composition/Spacing/Spacing';
import Icon from 'components/content/Icon/Icon';

export default {
  title: 'Components/Controls/Button',
  component: Button,
} as Meta;

export function Types() {
  return (
    <>
      <Button>Button</Button>
      <Button type="primary">Button</Button>{' '}
      <Button type="secondary">Button</Button>{' '}
      <Button type="positive">Button</Button>{' '}
      <Button type="negative">Button</Button>{' '}
      <Button type="primary" icon>
        <Icon icon="edit" title="Moderate" />
      </Button>
    </>
  );
}

export function DarkMode() {
  return (
    <Section className="m-theme-dark">
      <Spacing bottom="md" top="md">
        <Button>Button</Button>
        <Button type="primary">Button</Button>{' '}
        <Button type="secondary">Button</Button>{' '}
        <Button type="positive">Button</Button>{' '}
        <Button type="negative">Button</Button>{' '}
        <Button type="primary" icon>
          <Icon icon="edit" title="Moderate" />
        </Button>
      </Spacing>
    </Section>
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

function LinkExample({
  children,
  ...props
}: PropsWithChildren<{ [key: string]: unknown }>) {
  return (
    <a {...props} aria-label="Not just any link, a LinkExample link">
      {children}
    </a>
  );
}

/**
 * Use the `as` prop to control which component the Button renders as.
 */
export function AsComponent() {
  return (
    <Button as={LinkExample} href="#" block>
      Link button
    </Button>
  );
}
