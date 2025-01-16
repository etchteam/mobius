import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import List from './List';

import Grid from 'components/composition/Grid/Grid';
import Spacing from 'components/composition/Spacing/Spacing';
import Icon from 'components/content/Icon/Icon';
import Button from 'components/controls/Button/Button';
import Checkbox from 'components/controls/Checkbox/Checkbox';

export default {
  title: 'Components/Composition/List',
  component: List,
  subcomponents: {
    ListItem: List.Item,
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <List.Item key={item} icon={<Icon icon="favorite" />}>
        Icon List Item
      </List.Item>
    ))}
  </List>
);

export const Default = Template.bind({});

Default.storyName = 'List';

export const Animated: ComponentStory<typeof List> = (args) => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

  const remove = () => {
    const i = Math.floor(Math.random() * items.length);
    setItems(items.filter((val, key) => key !== i));
  };

  const add = () => {
    const i = Math.floor(Math.random() * 100);
    setItems([...items, i]);
  };

  return (
    <>
      <List {...args}>
        {items.map((item) => (
          <List.Item key={item} icon={<Icon icon="favorite" />}>
            Icon List Item
          </List.Item>
        ))}
      </List>
      <Spacing bottom="md" />
      <Grid>
        <Grid.Item>
          <Button onClick={remove}>Remove item</Button>
        </Grid.Item>
        <Grid.Item>
          <Button type="primary" onClick={add}>
            Add item
          </Button>
        </Grid.Item>
      </Grid>
    </>
  );
};

export const ListOfCheckboxes: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    {[1, 2, 3, 4, 5].map((item) => (
      <List.Item key={item}>
        <Checkbox>{' * '.repeat(item)}</Checkbox>
      </List.Item>
    ))}
  </List>
);

ListOfCheckboxes.args = {
  spacing: 'sm',
};
