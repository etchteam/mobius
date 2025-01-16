import React from 'react';

import FormGroup from 'components/composition/FormGroup/FormGroup';
import Grid from 'components/composition/Grid/Grid';
import Spacing from 'components/composition/Spacing/Spacing';
import Wrap from 'components/composition/Wrap/Wrap';
import Icon from 'components/content/Icon/Icon';
import Button from 'components/controls/Button/Button';
import Input from 'components/controls/Input/Input';
import Label from 'components/controls/Label/Label';
import Radio from 'components/controls/Radio/Radio';
import Select from 'components/controls/Select/Select';

export default {
  title: 'Recipes/Forms',
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
};

export function Form() {
  return (
    <Wrap size="lg">
      <form>
        <h2>About your business</h2>
        <Grid spacing="xs">
          <Grid.Item>
            <Icon color="positive" icon="circle-check" />
          </Grid.Item>
          <Grid.Item grow shrink>
            Your selections have been saved in your browser to save you time in
            future.
          </Grid.Item>
        </Grid>
        <Spacing bottom="lg" />
        <FormGroup>
          <Grid wrap>
            <Grid.Item xs={12} md={6}>
              <Label htmlFor="sector">Sector</Label>
            </Grid.Item>
            <Grid.Item xs={12} md={6}>
              <Input id="sector" placeholder="Sector" />
            </Grid.Item>
          </Grid>
        </FormGroup>
        <Spacing bottom="md" />
        <FormGroup>
          <Grid wrap>
            <Grid.Item xs={12} md={6}>
              <Label htmlFor="region">Region</Label>
            </Grid.Item>
            <Grid.Item xs={12} md={6}>
              <Select id="region">
                <option>England</option>
              </Select>
            </Grid.Item>
          </Grid>
        </FormGroup>
        <Spacing bottom="md" />
        <FormGroup>
          <Grid wrap>
            <Grid.Item xs={12} md={6}>
              <Label htmlFor="multiple" as="span" id="sites-label">
                Multiple sites
              </Label>
            </Grid.Item>
            <Grid.Item xs={12} md={6}>
              <div
                role="radiogroup"
                aria-labelledby="sites-label"
                id="multiple"
              >
                <Grid>
                  <Grid.Item xs={6}>
                    <Radio name="radio" id="yes">
                      Yes
                    </Radio>
                  </Grid.Item>
                  <Grid.Item xs={6}>
                    <Radio name="radio" id="no">
                      No
                    </Radio>
                  </Grid.Item>
                </Grid>
              </div>
            </Grid.Item>
          </Grid>
        </FormGroup>
        <Spacing bottom="lg" />
        <Grid direction="row-reverse">
          <Grid.Item xs={6}>
            <Button type="primary" block>
              Save
            </Button>
          </Grid.Item>
          <Grid.Item xs={6}>
            <Button block>Skip</Button>
          </Grid.Item>
        </Grid>
      </form>
    </Wrap>
  );
}
