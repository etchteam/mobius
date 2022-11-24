import React from 'react';
import classnames from 'classnames';

import { Sizes, Weights } from '../../../types/font.type';
import { Colors } from '../../../types/colors.type';

import styles from './Text.module.scss';

export interface TextProps {
  children: React.ReactNode;
  as?: 'div' | 'span' | 'p' | 'a' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  align?: 'left' | 'center' | 'right';
  display?: 'inline-block' | 'inline' | 'block';
  weight?: Weights;
  size?: Sizes;
  color?: Colors;
  flush?: boolean;
  transform?: string;
  [key: string]: any;
}

const Text = (
  {
    children, as, align, display, weight, size, color, flush, transform, ...props
  }:
  TextProps,
) => {
  const CustomTag = as ?? 'span' as keyof JSX.IntrinsicElements;
  const classes = classnames(styles.text, {
    [styles[`text--display-${display}`]]: display,
    [styles[`text--align-${align}`]]: align,
    [styles[`text--weight-${weight}`]]: weight,
    [styles[`text--size-${size}`]]: size,
    [styles[`text--color-${color}`]]: color,
    [styles['text--flush']]: flush,
    [styles[`text--transform-${transform}`]]: transform,
  });

  return (
    <CustomTag className={classes} {...props}>
      {children}
    </CustomTag>
  );
};

export default Text;
