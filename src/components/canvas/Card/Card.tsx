/* eslint-disable react/prefer-stateless-function */
import classNames from 'classnames';
import React, { Component, ComponentType } from 'react';

import styles from './Card.module.scss';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

import Icon from 'components/content/Icon/Icon';

export interface CardProps {
  readonly arrow?: boolean;
  /**
   * The component to render the button as.
   * Useful for routing in frameworks like NextJS: `<Card as={Link} href="/">`
   */
  readonly as?: ComponentType<any>;
  readonly border?: boolean;
  readonly children?: React.ReactNode;
  readonly control?: boolean;
  readonly disabled?: boolean;
  readonly href?: string;
  readonly id?: string;
  readonly muted?: boolean;
  readonly onClick?: () => void;
  readonly shadow?: boolean;
  readonly className?: string;
  [x: string]: unknown;
}

class Card extends Component<CardProps> {
  static readonly Header: typeof CardHeader = CardHeader;
  static readonly Body: typeof CardBody = CardBody;

  render() {
    const {
      arrow,
      as,
      border,
      children,
      control,
      disabled,
      href,
      id,
      muted,
      onClick,
      shadow,
      className,
      ...props
    } = this.props;

    const CardElement = as ?? (href ? 'a' : 'div');

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && onClick) {
        onClick();
      }
    };

    return (
      <CardElement
        className={classNames(styles.card, {
          [styles['card--border']]: border,
          [styles['card--clickable']]: href || onClick,
          [styles['card--shadow']]: shadow,
          [styles['card--disabled']]: disabled,
          [styles['card--control']]: control,
          [styles['card--muted']]: muted,
          [`${className}`]: className,
        })}
        href={href}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={handleKeyDown}
        role={onClick ? 'button' : undefined}
        id={id}
        {...props}
      >
        {arrow && (
          <div className={styles.card__arrow}>
            <Icon icon="arrow-right" />
          </div>
        )}
        {children}
      </CardElement>
    );
  }
}

export default Card;
