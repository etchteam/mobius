import { Meta } from '@storybook/react';
import React from 'react';

import StreamDot from './StreamDot';

export default {
  title: 'Components/Content/Stream Dot',
  component: StreamDot,
} as Meta;

export const Default = () => (
  <>
    <div>
      <StreamDot /> No stream
    </div>
    <div>
      <StreamDot stream="dry" /> Dry
    </div>
    <div>
      <StreamDot stream="residual" /> Residual
    </div>
    <div>
      <StreamDot stream="food" /> Food
    </div>
    <div>
      <StreamDot stream="garden" /> Garden
    </div>
    <div>
      <StreamDot stream="organic" /> Organic
    </div>
  </>
);

Default.storyName = 'Stream Dot';
