import React from 'react';
import classNames from 'classnames';

import { BaseInputProps } from 'lib/types';
import { defaultInputProps } from 'lib/default-props';

import styles from './Input.module.scss';

interface InputProps extends BaseInputProps {
  icon?: string;
  prefix?: string;
}

const Input = React.forwardRef((
  {
    prefix,
    suffix,
    disabled,
    touched,
    valid,
    status,
    ...props
  }: InputProps,
  ref: any,
) => (
  <div
    className={classNames(styles.input, {
      [styles['input--disabled']]: disabled,
      [styles['input--valid']]: touched && valid === true,
      [styles['input--invalid']]: touched && valid === false,
      [styles[`input--${status}`]]: status,
    })}
  >
    {prefix && (
      <div className={styles.input__prefix}>
        {prefix}
      </div>
    )}
    <input className={styles.input__input} disabled={disabled} {...props} ref={ref} />
    {suffix && (
      <div className={styles.input__suffix}>
        {suffix}
      </div>
    )}
  </div>
));

Input.defaultProps = {
  ...defaultInputProps,
  icon: undefined,
};

Input.displayName = 'Input';

export default Input;
