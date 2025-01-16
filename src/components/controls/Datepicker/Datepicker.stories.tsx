import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Label from '../Label/Label';

import Datepicker from './Datepicker';

export default {
  title: 'Components/Controls/Datepicker',
  component: Datepicker,
} as Meta;

export function Default() {
  const [value, setValue] = useState('');

  return (
    <>
      <Label htmlFor="my-datepicker">Select a date</Label>
      <Datepicker
        name="my-datepicker"
        id="my-datepicker"
        value={value}
        onChange={setValue}
      />
      <div style={{ height: 300 }} />
    </>
  );
}

export function Day() {
  const [value, setValue] = useState('');

  return (
    <>
      <Label htmlFor="my-daypicker">Select a day</Label>
      <Datepicker
        name="my-daypicker"
        id="my-daypicker"
        value={value}
        onChange={setValue}
        type="day"
      />
      <div style={{ height: 300 }} />
    </>
  );
}

export function Month() {
  const [value, setValue] = useState('');

  return (
    <>
      <Label htmlFor="my-monthpicker">Select a month</Label>
      <Datepicker
        name="my-monthpicker"
        id="my-monthpicker"
        value={value}
        onChange={setValue}
        type="month"
      />
      <div style={{ height: 300 }} />
    </>
  );
}

export function Year() {
  const [value, setValue] = useState('');

  return (
    <>
      <Label htmlFor="my-yearpicker">Select a year</Label>
      <Datepicker
        name="my-yearpicker"
        id="my-yearpicker"
        value={value}
        onChange={setValue}
        type="year"
      />
      <div style={{ height: 300 }} />
    </>
  );
}

/**
 * Datepicker works as a controlled component, so with react hook form it
 * needs to be wrapped in `Controller`
 * https://react-hook-form.com/get-started#IntegratingControlledInputs
 */
export function WithReactHookForm() {
  const { control, watch } = useForm<{ day: string }>({
    mode: 'onBlur',
    defaultValues: {
      day: '10/10/2022',
    },
  });
  const day = watch('day');

  return (
    <>
      <Label htmlFor="day">Select a date</Label>
      <Controller
        control={control}
        name="day"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Datepicker
            id="day"
            touched={fieldState.isTouched}
            valid={!fieldState.error}
            {...field}
          />
        )}
      />
      <br />
      The selected date is: {day}
      <div style={{ height: 300 }} />
    </>
  );
}
