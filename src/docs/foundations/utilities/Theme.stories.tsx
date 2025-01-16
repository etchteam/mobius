import React from 'react';

import Section from 'components/canvas/Section/Section';
import Grid from 'components/composition/Grid/Grid';
import Spacing from 'components/composition/Spacing/Spacing';
import Wrap from 'components/composition/Wrap/Wrap';
import Button from 'components/controls/Button/Button';
import { base, emphasis, themes } from 'lib/theme';

const description = `
  Many components in the design system accept a theme context. The theme context
  enables a set of variables for display properties like background, text and border
  colours.

  Themes can be applied to components by setting a theme utility class (\`m-theme-dark\`) on the
  component or one of the parent elements.

  Components that support theming have a 'theme support' badge at the top of their docs page.
`;

export default {
  title: 'Foundations/Utilities/Theme',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: description,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            // Temporary disable
            id: 'color-contrast',
            enabled: false,
          },
          {
            id: 'link-in-text-block',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: themes,
    },
  },
};

const ThemedSection = ({ theme }) => (
  <Section className={`m-theme-${theme}`}>
    <Spacing bottom="fluid" />
    <Wrap size="md">
      <h1>{theme} theme</h1>
      <p>
        Aliquam egestas mi quam, a tincidunt lectus{' '}
        <a href="https://wrap.ngo">faucibus euismod</a>. Pellentesque et metus
        nunc. Fusce ante arcu, mattis pretium semper ac, pretium vitae velit.
        Donec vitae eros et arcu accumsan auctor at id ipsum. Aliquam finibus,
        mi ac tincidunt blandit, purus elit ornare dui, nec dignissim mi ante
        sit amet mauris.
      </p>
      <Spacing bottom="md" />
      <Grid>
        <Grid.Item xs={12} sm="auto">
          <Button type="primary" block="mobile">
            Button text
          </Button>
        </Grid.Item>
        <Grid.Item xs={12} sm="auto">
          <Button block="mobile">Button text</Button>
        </Grid.Item>
      </Grid>
    </Wrap>
    <Spacing bottom="fluid" />
  </Section>
);

export const Theme = ({ theme }) => <ThemedSection theme={theme} />;

Theme.args = {
  theme: 'light',
};

export const Base = () => (
  <>
    {base.map((theme) => (
      <ThemedSection key={theme} theme={theme} />
    ))}
  </>
);

export const Emphasis = () => (
  <>
    {emphasis.map((theme) => (
      <ThemedSection key={theme} theme={theme} />
    ))}
  </>
);
