import { Meta } from '@storybook/react';
import React from 'react';

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

export const TextStory = (args: TextProps) => (
  <Text {...args}>The future is in our hands to shape.</Text>
);

TextStory.args = {
  as: 'span',
  size: 'base',
};

TextStory.storyName = 'Text';

export const Sizes = () => {
  const sizes: TextProps['size'][] = [
    'base',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
  ];

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
    'forest',
    'forest-75',
    'forest-50',
    'forest-25',
    'earth',
    'earth-75',
    'earth-50',
    'earth-25',
    'sand',
    'sand-75',
    'sand-50',
    'sand-25',
    'lime',
    'lime-75',
    'lime-50',
    'lime-25',
    'sky',
    'sky-75',
    'sky-50',
    'sky-25',
    'rose',
    'rose-75',
    'rose-50',
    'rose-25',
    'cloud',
    'cloud-75',
    'steel',
    'coal',
    'lemon',
    'orange',
    'lilac',
    'violet',
    'body',
    'body-muted',
    'background',
    'background-muted',
    'link',
    'neutral',
    'neutral-light',
    'positive',
    'positive-light',
    'negative',
    'negative-light',
    'no-stream',
    'dry-stream',
    'food-stream',
    'garden-stream',
    'organic-stream',
    'residual-stream',
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
  const weights: TextProps['weight'][] = ['base', 'light', 'bold', 'black'];

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
  const alignments: TextProps['align'][] = ['center', 'left', 'right'];

  return (
    <>
      {alignments.map((alignment) => (
        <div key={alignment}>
          <Text display="block" align={alignment}>
            {alignment}
          </Text>
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
    <Text as="h2">It will inherit the styles of the base HTML element</Text>
  </>
);

export const Flush = () => (
  <>
    <Text as="h2" flush>
      The `flush` prop removes outer margin/padding from the base HTML element
    </Text>
    <p>Like this.</p>
  </>
);

export const Display = () => (
  <>
    <Text as="h2" display="inline">
      The `display` prop alters the display css property of the element
    </Text>{' '}
    <span>Like this.</span>
  </>
);
