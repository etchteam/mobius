import { Meta } from '@storybook/react';
import classNames from 'classnames';
import React from 'react';

const alignments = ['left', 'center', 'right'];

const colors = [
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

const sizes = [
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

const transforms = ['uppercase', 'lowercase', 'capitalize'];

const weights = ['base', 'light', 'bold', 'black'];

export default {
  title: 'Foundations/Utilities/Text',
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: [
        'div',
        'span',
        'p',
        'a',
        'strong',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
    },
    align: {
      control: {
        type: 'radio',
      },
      options: alignments,
    },
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
    size: {
      control: {
        type: 'select',
      },
      options: sizes,
    },
    transform: {
      control: {
        type: 'radio',
      },
      options: transforms,
    },
    weight: {
      control: {
        type: 'select',
      },
      options: weights,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A set of utility classes that can be added to any component or element to alter the text style.',
      },
    },
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

export const Text = (args) => {
  const { as, ...rest } = args;

  const cxObj = {};

  Object.keys(rest).forEach((key) => {
    if (rest[key]) {
      cxObj[`m-text-${key}-${rest[key]}`] = true;
    }
  });

  const cx = classNames(cxObj);

  const Element = as ?? 'span';

  return <Element className={cx}>The future is in our hands to shape.</Element>;
};

Text.args = {};

export const Sizes = () => {
  return (
    <>
      {sizes.map((size) => (
        <p key={size} className={`m-text-size-${size}`}>
          This text is size {size}
        </p>
      ))}
    </>
  );
};

export const Colors = () => {
  return (
    <>
      {colors.map((color) => (
        <p key={color} className={`m-text-color-${color}`}>
          {color}
        </p>
      ))}
    </>
  );
};

export const Weights = () => {
  return (
    <>
      {weights.map((weight) => (
        <p key={weight} className={`m-text-weight-${weight}`}>
          This text is weighted {weight}.
        </p>
      ))}
    </>
  );
};

export const Align = () => {
  return (
    <>
      {alignments.map((alignment) => (
        <p key={alignment} className={`m-text-align-${alignment}`}>
          This text is {alignment} aligned.
        </p>
      ))}
    </>
  );
};
