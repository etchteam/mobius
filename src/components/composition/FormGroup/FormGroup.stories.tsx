import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import Grid from '../Grid/Grid';
import Spacing from '../Spacing/Spacing';

import FormGroup from './FormGroup';

import Alert from 'components/canvas/Alert/Alert';
import Icon from 'components/content/Icon/Icon';
import Checkbox from 'components/controls/Checkbox/Checkbox';
import Input from 'components/controls/Input/Input';
import Label from 'components/controls/Label/Label';
import Radio from 'components/controls/Radio/Radio';
import TextButton from 'components/controls/TextButton/TextButton';

export default {
  title: 'Components/Composition/Form group',
  component: FormGroup,
} as Meta;

export function Default() {
  return (
    <FormGroup>
      <Label htmlFor="my-input">Input label</Label>
      <Input id="my-input" name="my-input" />
    </FormGroup>
  );
}

Default.storyName = 'Form group';

export function Horizontal() {
  return (
    <>
      <FormGroup horizontal>
        <FormGroup.Label>
          <Label htmlFor="my-input">Input label</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <Input id="my-input" name="my-input" />
        </FormGroup.Control>
      </FormGroup>

      <Spacing bottom="lg" />

      <FormGroup horizontal>
        <FormGroup.Label>
          <Label id="my-input-two" as="span">
            Input label with a bigger list of form controls
          </Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <div role="radiogroup" aria-labelledby="my-input-two">
            <Grid wrap>
              {[1, 2, 3, 4].map((option) => (
                <Grid.Item xs={12} key={option}>
                  <Radio value={option} name="my-radio-input">
                    Option {option}
                  </Radio>
                </Grid.Item>
              ))}
            </Grid>
          </div>
        </FormGroup.Control>
      </FormGroup>
    </>
  );
}

export function WithInfo() {
  const [infoOneOpen, setInfoOneOpen] = useState(false);
  const [infoTwoOpen, setInfoTwoOpen] = useState(true);

  return (
    <>
      <FormGroup>
        <FormGroup.Label>
          <Label htmlFor="my-input-one">Input label</Label>
          <TextButton
            onClick={() => setInfoOneOpen(!infoOneOpen)}
            aria-controls="form-group-info-one"
            aria-expanded={infoOneOpen}
          >
            <Icon icon="circle-information" title="Information" />
          </TextButton>
        </FormGroup.Label>
        <FormGroup.Control>
          <Input id="my-input-one" name="my-input" />
        </FormGroup.Control>
        <FormGroup.Info controlId="form-group-info-one" open={infoOneOpen}>
          <Alert className="m-theme-info">This is an info message</Alert>
        </FormGroup.Info>
      </FormGroup>

      <Spacing bottom="lg" />

      <FormGroup horizontal>
        <FormGroup.Label>
          <Label htmlFor="my-input-two">Input label</Label>
          <TextButton
            onClick={() => setInfoTwoOpen(!infoTwoOpen)}
            aria-controls="form-group-info-two"
            aria-expanded={infoTwoOpen}
          >
            <Icon icon="circle-information" title="Information" />
          </TextButton>
        </FormGroup.Label>
        <FormGroup.Control>
          <Input id="my-input-two" name="my-input-two" />
        </FormGroup.Control>
        <FormGroup.Info controlId="form-group-info-two" open={infoTwoOpen}>
          <Alert className="m-theme-info">This is an info message</Alert>
        </FormGroup.Info>
      </FormGroup>
    </>
  );
}

export function AsFieldset() {
  return (
    <>
      <FormGroup as="fieldset">
        <FormGroup.Label as="legend">
          <Label as="span">Legend</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <Grid wrap>
            {[1, 2, 3].map((option) => (
              <Grid.Item xs={12} key={option}>
                <Checkbox value={option} name="my-checkbox-input-1">
                  Option {option}
                </Checkbox>
              </Grid.Item>
            ))}
          </Grid>
        </FormGroup.Control>
      </FormGroup>

      <Spacing bottom="lg" />

      <FormGroup as="fieldset" horizontal>
        <FormGroup.Label as="legend">
          <Label as="span">Legend</Label>
        </FormGroup.Label>
        <FormGroup.Control>
          <Grid wrap>
            {[1, 2, 3].map((option) => (
              <Grid.Item xs={12} key={option}>
                <Checkbox value={option} name="my-checkbox-input-2">
                  Option {option}
                </Checkbox>
              </Grid.Item>
            ))}
          </Grid>
        </FormGroup.Control>
      </FormGroup>
    </>
  );
}
