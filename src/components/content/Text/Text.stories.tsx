import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from './Text';

export default {
  title: 'Content/Text',
  component: Text,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

export const Sizes = () => {
  const sizes: TextProps['size'][] = ['h1', 'h2', 'h3', 'xl', 'lg', 'md', 'sm', 'xs'];

  return (
    <>
      {sizes.map((size) => (
        <div key={size}>
          <Text size={size}>{size}</Text>
        </div>
      ))}
    </>
  );
};

export const Colors = () => {
  const colors: TextProps['color'][] = [
    'white',
    'blue-lightest',
    'blue-light',
    'blue',
    'blue-dark',
    'blue-darkest',
    'blue-2',
    'grey-light',
    'yellow',
    'orange',
    'green',
    'green-3',
    'maroon',
    'magenta',
    'red',
    'body',
    'background',
    'link',
    'positive',
    'negative',
  ];

  return (
    <>
      {colors.map((color) => (
        <div key={color}>
          <Text color={color}>{color}</Text>
        </div>
      ))}
    </>
  );
};

export const Weights = () => {
  const weights: TextProps['weight'][] = [
    'base',
    'light',
    'bold',
    'black',
  ];

  return (
    <>
      {weights.map((weight) => (
        <div key={weight}>
          <Text weight={weight}>{weight}</Text>
        </div>
      ))}
    </>
  );
};

export const Align = () => {
  const alignments: TextProps['align'][] = [
    'center',
    'left',
    'right',
  ];

  return (
    <>
      {alignments.map((alignment) => (
        <div key={alignment}>
          <Text display="block" align={alignment}>{alignment}</Text>
        </div>
      ))}
    </>
  );
};

export const DifferentHtmlElements = () => (
  <>
    <Text as="p">
      Text can use typography based HTML elements through the `as` prop
    </Text>
    <Text as="h2">
      It will inherit the styles of the base HTML element
    </Text>
  </>
);

export const Flush = () => (
  <>
    <Text as="h2" flush>
      The `flush` prop removes outer margin/padding from the base HTML element
    </Text>
    <p>
      Like this.
    </p>
  </>
);

export const Display = () => (
  <>
    <Text as="h2" display="inline">
      The `display` prop alters the display css property of the element
    </Text>
    {' '}
    <span>
      Like this.
    </span>
  </>
);
