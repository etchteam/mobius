import React from 'react';

import { Container as ContainerType, getColourName, Colour } from 'lib/container';

import ContainerSvg from '../ContainerSvg/ContainerSvg';
import styles from './Container.module.scss';

export default function Container({
  name,
  displayName,
  bodyColour,
  lidColour,
  frequency,
  cost,
}: ContainerType) {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <ContainerSvg
          name={name}
          bodyColour={getColourName(bodyColour) as Colour}
          lidColour={getColourName(lidColour)}
        />
      </div>
      <div className={styles.container__content}>
        <h4 className={styles.container__title}>{displayName}</h4>
        {frequency && <p>{frequency}</p>}
        {cost && <p>{cost}</p>}
      </div>
    </div>
  );
}

Container.defaultProps = {
  lidColour: undefined,
  frequency: undefined,
  cost: undefined,
};
