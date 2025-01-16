import cx from 'classnames';
import React from 'react';

import styles from './Section.module.scss';

export default function Section({
  className,
  children,
}: {
  readonly className?: string;
  readonly children?: React.ReactNode;
}) {
  return <div className={cx([styles.section, className])}>{children}</div>;
}
