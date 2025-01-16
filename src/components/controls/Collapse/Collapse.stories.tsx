import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import Collapse, { CollapseProps } from './Collapse';

import Card from 'components/canvas/Card/Card';

export default {
  title: 'Components/Controls/Collapse',
  component: Collapse,
} as Meta;

export const Default: Story<CollapseProps> = (props) => (
  <Collapse {...props}>
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);

Default.storyName = 'Collapse';
Default.args = {
  headerLabel: 'Click me',
  align: 'left',
  iconOpen: 'chevron-up',
  iconClosed: 'chevron-down',
  defaultOpen: false,
};

export const RightAlign: Story = () => (
  <Collapse headerLabel="Click me" align="right">
    <div>
      <p>Hidden content</p>
    </div>
  </Collapse>
);

export const DefaultOpen: Story = () => (
  <Collapse headerLabel="Click me" defaultOpen>
    <div>
      <p>Collapse is open from initial render</p>
    </div>
  </Collapse>
);

DefaultOpen.parameters = {
  docs: {
    description: {
      story:
        'Set `defaultOpen` to `true` to have the collapse open from initial render.',
    },
  },
};

export const CollapseState: Story = () => {
  const [open, setOpen] = useState(false);

  const onToggle = function (open?: boolean) {
    setOpen(open ?? false);
  };

  return (
    <Card muted={!open} border={open} shadow={open}>
      <Card.Body>
        <Collapse onToggle={onToggle} headerLabel="Click me" align="right">
          <div>
            <p>
              When the collapse is toggled the onToggle event handler is called
            </p>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

CollapseState.parameters = {
  docs: {
    description: {
      story: 'Watch the `onToggle` event to detect the state of the collapse.',
    },
  },
};
