import { Meta } from '@storybook/react';
import React from 'react';

import Wrap from './Wrap';

import Card from 'components/canvas/Card/Card';
import Spacing from 'components/composition/Spacing/Spacing';

export default {
  title: 'Components/Composition/Wrap',
  component: Wrap,
} as Meta;

export function Default() {
  const sizes = ['sm', 'md', 'lg', 'xl'];

  return (
    <>
      {sizes.map((size) => (
        <Spacing bottom="md" key={size}>
          <Wrap size={size}>
            <Card border>
              <Card.Body>
                <div className="m-text-align-center">
                  Limit width of the content
                </div>
              </Card.Body>
            </Card>
          </Wrap>
        </Spacing>
      ))}
    </>
  );
}

Default.storyName = 'Wrap';
