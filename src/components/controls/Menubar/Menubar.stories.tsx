/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Menubar from './Menubar';

import Skin, { skins, emphasisSkins } from 'components/composition/Skin/Skin';
import Icon from 'components/content/Icon/Icon';

export default {
  title: 'Controls/Menubar',
  component: Menubar,
  subcomponents: {
    MenubarTabs: Menubar.Tabs,
    MenubarTab: Menubar.Tab,
    MenubarBack: Menubar.Back,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Muted background is a few decimal points out of being a11y compliant with link
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  argTypes: {
    skin: {
      control: 'select',
      options: [...skins, ...emphasisSkins],
    },
  },
} as Meta;

export const FourTabs: StoryFn = (args) => (
  <Skin skin={args.skin}>
    <Menubar {...args}>
      <Menubar.Tabs>
        <Menubar.Tab completed>
          <a href="#">Service</a>
        </Menubar.Tab>
        <Menubar.Tab active>
          <a href="#">Economic</a>
        </Menubar.Tab>
        <Menubar.Tab>
          <a href="#">Environmental</a>
        </Menubar.Tab>
        <Menubar.Tab disabled>
          <span>Technical</span>
        </Menubar.Tab>
      </Menubar.Tabs>
    </Menubar>
  </Skin>
);

FourTabs.args = {
  skin: 'light',
};

export const TwoTabs: StoryFn = () => (
  <Menubar>
    <Menubar.Tabs>
      <Menubar.Tab active>
        <a href="#">Collection</a>
      </Menubar.Tab>
      <Menubar.Tab disabled>
        <span>Disposal</span>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);

export const WithBackButton = () => (
  <Menubar>
    <Menubar.Back>
      <a href="#">
        <Icon icon="arrow-left" /> Back
      </a>
    </Menubar.Back>
    <Menubar.Tabs>
      <Menubar.Tab active>
        <a href="#">Collection</a>
      </Menubar.Tab>
      <Menubar.Tab>
        <a href="#">Disposal</a>
      </Menubar.Tab>
    </Menubar.Tabs>
  </Menubar>
);
