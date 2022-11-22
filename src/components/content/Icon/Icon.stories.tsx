import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Grid from 'components/composition/Grid/Grid';
import TextAlign from 'components/composition/TextAlign/TextAlign';
import Text from 'components/content/Text/Text';
import Card from 'components/canvas/Card/Card';
import Icon from './Icon';

export default {
  title: 'Content/Icon',
  component: Icon,
} as Meta;

function importAll(r) {
  return r.keys().map((i) => i.replace('./', '').replace('.svg', ''));
}

const icons = importAll(require.context('../../../../node_modules/mono-icons/svg/', true, /\.svg$/));

export function Default() {
  return (
    <Grid wrap>
      {icons.map((icon) => (
        <Grid.Item xs={6} sm={3} md={2} flex>
          <Card border>
            <Card.Body>
              <TextAlign align="center">
                <Text size="xl">
                  <Icon icon={icon} />
                </Text>
                <br />
                <Text size="sm">
                  {icon}
                </Text>
              </TextAlign>
            </Card.Body>
          </Card>
        </Grid.Item>
      ))}
    </Grid>
  );
}

Default.storyName = 'Icon';