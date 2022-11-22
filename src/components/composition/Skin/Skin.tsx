import React from 'react';
import classNames from 'classnames';

export const skins = [
  'light',
  'dark',
];

export const emphasisSkins = [
  'neutral',
  'positive',
  'negative',
  'attention',
];

// This component uses non-module CSS
// so that we can define skins at the
// brand/theme level.
export default function Skin({
  skin,
  children,
}: {
  skin: string;
  children: React.ReactNode,
}) {
  return (
    <div
      className={classNames('skin', {
        [`skin--${skin}`]: skin,
      })}
    >
      {children}
    </div>
  );
}
