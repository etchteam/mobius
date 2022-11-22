import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  submit?: boolean;
  loading?: boolean;
  href?: string;
  type?: 'primary' | 'secondary' | 'positive' | 'negative';
  icon?: boolean;
  block?: boolean | 'mobile';
  size?: string;
  [x: string]: any;
}

const Button = React.forwardRef(({
  children,
  loading,
  submit,
  type,
  href,
  icon,
  block,
  size,
  ...props
}: ButtonProps, ref: any) => {
  const baseProps = {
    className: classNames(styles.button, {
      [styles[`button--${type}`]]: !!type,
      [styles['button--loading']]: loading,
      [styles['button--block']]: block === true,
      [styles['button--block-mobile']]: block === 'mobile',
      [styles['button--icon']]: icon,
      [styles[`button--${size}`]]: !!size,
    }),
    disabled: loading || undefined,
    ref,
    ...props,
  };

  if (href) {
    return (
      <a {...baseProps} href={href}>{children}</a>
    );
  }

  return (
    <button
      {...baseProps}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
});

Button.defaultProps = {
  submit: false,
  loading: false,
  type: undefined,
  href: undefined,
  icon: false,
  block: undefined,
};
Button.displayName = 'Button';

export default Button;
