import { Meta } from '@storybook/react';
import React from 'react';

import LoadingImage from './LoadingImage';

export default {
  title: 'Components/Content/Loading Image',
  component: LoadingImage,
} as Meta;

export const Default = () => <LoadingImage width={300} height={200} />;

Default.storyName = 'Loading Image';

export const Rounded = () => (
  <LoadingImage width={100} height={100} shape="rounded" />
);

export const Circle = () => (
  <LoadingImage width={100} height={100} shape="circle" />
);
