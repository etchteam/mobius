import { Meta } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import Label from '../Label/Label';

import Slider from './Slider';

export default {
  title: 'Components/Controls/Slider',
  component: Slider,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
          {
            id: 'aria-allowed-role',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Default = (args) => (
  <>
    <Label htmlFor={args.id}>Slider</Label>
    <Slider {...args} />
  </>
);

Default.args = { id: 'default', min: 0, max: 100, step: 1 };

export const Disabled = (args) => (
  <>
    <Label htmlFor="disabled">Slider</Label>
    <Slider id="disabled" disabled {...args} />
  </>
);

export const WithLabels = (args) => {
  return (
    <>
      <Label htmlFor="withLabels">Slider</Label>
      <Slider id="withLabels" {...args}>
        <Slider.Label position="lower" showValue asPercentage>
          Lower label
        </Slider.Label>
        <Slider.Label position="upper" showValue asPercentage>
          Upper label
        </Slider.Label>
      </Slider>
    </>
  );
};

export const WithReactHookForm = () => {
  const { register, watch, formState } = useForm<{ ['form-slider']: number }>({
    mode: 'onBlur',
    defaultValues: {
      ['form-slider']: 30,
    },
  });
  const sliderValue = watch('form-slider');

  return (
    <>
      <Label htmlFor="form-slider">Please select a value</Label>
      <Slider
        id="form-slider"
        defaultValue={formState.defaultValues?.['form-slider']}
        {...register('form-slider', { required: true })}
      />
      <br />
      The selected value is: {sliderValue}
    </>
  );
};
