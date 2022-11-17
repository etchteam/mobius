import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './Icon.module.scss';

interface IconProps {
  icon: string;
  color?: string;
  title?: string;
  size?: string;
}

// Has to be a PureComponent so we get the shallow prop comparison
// and runs shouldComponentUpdate otherwise the icon flashes when state changes
function Icon({
  icon,
  color,
  title,
  size,
}: IconProps) {
  const [IconSVG, setIcon] = useState(null);
  useEffect(() => {
    const fetchIcon = async () => {
      const dynamicIcon = await import(`!!@svgr/webpack!mono-icons/svg/${icon}.svg`);
      setIcon(dynamicIcon.default);
    };

    fetchIcon();
  }, [icon]);

  return (
    <span
      className={classNames(styles.icon, {
        [styles[`icon--${color}`]]: color,
        [styles[`icon--${size}`]]: size,
      })}
      title={title}
      aria-hidden={!title}
    >
      {IconSVG}
    </span>
  );
}

export default Icon;
