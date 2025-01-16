import { Meta } from '@storybook/react';
import React from 'react';

import Spacing from '../../../components/composition/Spacing/Spacing';

export default {
  title: 'Foundations/Tokens/Typography',
} as Meta;

export const Typography = () => (
  <>
    <Spacing bottom="md">
      <span>base</span>
      <div className="m-text-size-base">
        The future is in our hands to shape.
      </div>
    </Spacing>
    <Spacing bottom="md">
      <span>xs</span>
      <div className="m-text-size-xs">The future is in our hands to shape.</div>
    </Spacing>
    <Spacing bottom="md">
      <span>sm</span>
      <div className="m-text-size-base">
        The future is in our hands to shape.
      </div>
    </Spacing>
    <Spacing bottom="md">
      <span>md</span>
      <div className="m-text-size-md">The future is in our hands to shape.</div>
    </Spacing>
    <Spacing bottom="md">
      <span>lg</span>
      <div className="m-text-size-lg">The future is in our hands to shape.</div>
    </Spacing>
    <Spacing bottom="md">
      <span>xl</span>
      <div className="m-text-size-xl">The future is in our hands to shape.</div>
    </Spacing>
    <Spacing bottom="md">
      <span>h1</span>
      <h1>The future is in our hands to shape.</h1>
    </Spacing>
    <Spacing bottom="md">
      <span>h2</span>
      <h2>The future is in our hands to shape.</h2>
    </Spacing>
    <Spacing bottom="md">
      <span>h3</span>
      <h3>The future is in our hands to shape.</h3>
    </Spacing>
    <Spacing bottom="md">
      <span>h4</span>
      <h4>The future is in our hands to shape.</h4>
    </Spacing>
    <Spacing bottom="md">
      <span>h5</span>
      <h5>The future is in our hands to shape.</h5>
    </Spacing>
    <Spacing bottom="md">
      <span>h6</span>
      <h6>The future is in our hands to shape.</h6>
    </Spacing>
  </>
);
