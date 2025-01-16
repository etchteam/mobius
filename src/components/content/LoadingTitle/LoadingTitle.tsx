import React from 'react';

import LoadingText from '../LoadingText/LoadingText';

export interface LoadingTitleProps {
  readonly chars?: number;
  readonly as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function LoadingTitle({ chars, as }: LoadingTitleProps) {
  const Element = as ?? 'h1';
  return (
    <Element aria-hidden="true">
      <LoadingText chars={chars} />
    </Element>
  );
}
