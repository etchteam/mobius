import classNames from 'classnames';
import React from 'react';

import { Breakpoints } from '../../../types/breakpoints.type';
import { Spacing as SpacingType } from '../../../types/spacing.type';

import styles from './Wrap.module.scss';

function Wrap({
  size,
  gutter,
  children,
}: Readonly<{
  size?: Breakpoints | 'auto' | string;
  gutter?: SpacingType | 'none';
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={classNames(styles.wrap, {
        [styles[`wrap--${size}`]]: size,
        [styles[`wrap--gutter-${gutter}`]]: gutter,
      })}
    >
      {children}
    </div>
  );
}

export default Wrap;
