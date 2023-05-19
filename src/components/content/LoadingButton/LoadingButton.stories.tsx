import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import LoadingButton from './LoadingButton';

export default {
  title: 'Content/Loading Button',
  component: LoadingButton,
} as Meta;

export const Default = () => <LoadingButton />;

Default.storyName = 'Loading Button';

export const Small = () => <LoadingButton size="small" />;

export const Block = () => <LoadingButton block />;

export const BlockMobile = () => <LoadingButton block="mobile" />;
