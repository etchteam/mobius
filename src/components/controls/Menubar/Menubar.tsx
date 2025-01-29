import classNames from 'classnames';
import React from 'react';

import styles from './Menubar.module.scss';

export interface MenuBarTabProps {
  readonly children?: React.ReactNode;
  readonly active?: boolean;
  readonly disabled?: boolean;
  readonly completed?: boolean;
}

const MenubarTabs = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles.menubar__inner}>
    <ul className={styles.menubar__tabs}>{children}</ul>
  </div>
);

const MenubarTab = ({
  children,
  active,
  disabled,
  completed,
}: MenuBarTabProps) => (
  <li
    className={classNames(styles.menubar__tab, {
      [styles['menubar__tab--active']]: active,
      [styles['menubar__tab--disabled']]: disabled,
      [styles['menubar__tab--completed']]: completed,
    })}
  >
    <div className={styles['menubar__tab-inner']}>{children}</div>
  </li>
);

const MenubarBack = ({ children }: { readonly children?: React.ReactNode }) => (
  <div className={styles.menubar__back}>
    <span className={styles['menubar__back-link']}>{children}</span>
  </div>
);

const Menubar = ({
  children,
  transparent,
}: {
  readonly children?: React.ReactNode;
  readonly transparent?: boolean;
}) => (
  <nav
    className={classNames(styles.menubar, {
      [styles['menubar--transparent']]: transparent,
    })}
  >
    {children}
  </nav>
);

Menubar.Back = MenubarBack;
Menubar.Tabs = MenubarTabs;
Menubar.Tab = MenubarTab;

export default Menubar;
