import { Meta } from '@storybook/react';
import React from 'react';

import LoadingFormGroup from './LoadingFormGroup';

export default {
  title: 'Components/Content/Loading Form Group',
  component: LoadingFormGroup,
} as Meta;

export const Default = () => <LoadingFormGroup />;

Default.storyName = 'Loading Form Group';

export const Horizontal = () => <LoadingFormGroup horizontal />;
