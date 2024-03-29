import classNames from 'classnames';
import React from 'react';

import { Breakpoints } from '../../../types/breakpoints.type';

import styles from './Wrap.module.scss';

function Wrap({
  size,
  children,
}: Readonly<{
  size?: Breakpoints | 'auto' | string;
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={classNames(styles.wrap, {
        [styles[`wrap--${size}`]]: size,
      })}
    >
      {children}
    </div>
  );
}

export default Wrap;
