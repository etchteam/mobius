import classNames from 'classnames';
import React from 'react';

import styles from './ContainerSvg.module.scss';

import { Colour, Name } from 'lib/container';

export interface ContainerSvgProps {
  readonly name: Name;
  readonly lidColour?: Colour | 'no-lid';
  readonly bodyColour?: Colour;
  readonly secondaryColour?: Colour;
}

const TrolliboxSVG = (
  bodyClassName: string,
  lidClassName: string,
  secondaryClassName: string,
  position?: number,
) => {
  let colors = Array(3).fill({ bodyClassName, lidClassName: bodyClassName });
  if (position !== undefined) {
    colors = colors.map((_, index) => ({
      bodyClassName: index === position ? bodyClassName : secondaryClassName,
      lidClassName: index === position ? lidClassName : secondaryClassName,
    }));
  }
  return (
    <svg
      className={styles['container-svg']}
      viewBox="0 0 65 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={colors[0].lidClassName}
        d="M10.7397 2C10.7397 0.895431 11.6352 0 12.7397 0H62.7397C63.8443 0 64.7397 0.895431 64.7397 2V4H10.7397V2Z"
        fill="#2A8CC1"
      />
      <path
        className={colors[0].bodyClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.7397 5H13.7397L15.4983 16.2575C15.6341 18.3623 17.3808 20 19.49 20H55.9895C58.0987 20 59.8454 18.3623 59.9812 16.2575L61.7397 5ZM33.7397 9C32.6352 9 31.7397 9.89543 31.7397 11C31.7397 12.1046 32.6352 13 33.7397 13H41.7397C42.8443 13 43.7397 12.1046 43.7397 11C43.7397 9.89543 42.8443 9 41.7397 9H33.7397Z"
        fill="#2A8CC1"
      />
      <path
        className={colors[1].lidClassName}
        d="M10.7397 24C10.7397 22.8954 11.6352 22 12.7397 22H62.7397C63.8443 22 64.7397 22.8954 64.7397 24V26H10.7397V24Z"
        fill="#2A8CC1"
      />
      <path
        className={colors[1].bodyClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.7397 27H13.7397L15.4983 46.2575C15.6341 48.3623 17.3808 50 19.49 50H55.9895C58.0987 50 59.8454 48.3623 59.9812 46.2575L61.7397 27ZM33.7397 31C32.6352 31 31.7397 31.8954 31.7397 33C31.7397 34.1046 32.6352 35 33.7397 35H41.7397C42.8443 35 43.7397 34.1046 43.7397 33C43.7397 31.8954 42.8443 31 41.7397 31H33.7397Z"
        fill="#2A8CC1"
      />
      <path
        className={colors[2].lidClassName}
        d="M10.7397 54C10.7397 52.8954 11.6352 52 12.7397 52H62.7397C63.8443 52 64.7397 52.8954 64.7397 54V56H10.7397V54Z"
        fill="#2A8CC1"
      />
      <path
        className={colors[2].bodyClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7397 57H61.7397L59.9812 84.2575C59.8454 86.3623 58.0987 88 55.9895 88H19.7397C19.7397 84.4916 17.933 81.4051 15.1991 79.6204L13.7397 57ZM31.7397 63C31.7397 61.8954 32.6352 61 33.7397 61H41.7397C42.8443 61 43.7397 61.8954 43.7397 63C43.7397 64.1046 42.8443 65 41.7397 65H33.7397C32.6352 65 31.7397 64.1046 31.7397 63Z"
        fill="#2A8CC1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.01405 6.44664C0.0612497 6.99674 -0.27894 8.20635 0.247444 9.17245L3.82701 15.7422L6.95948 78.3916C7.84218 78.1367 8.77508 78 9.7399 78C10.2058 78 10.6643 78.0319 11.1132 78.0935L7.73979 14.0003L7.74008 14.0001L3.78088 7.1841C3.21951 6.21768 1.98194 5.88783 1.01405 6.44664ZM17.7406 94C18.6141 92.8372 19.2399 91.4778 19.5399 90H55.0596C53.6729 92.3982 51.0808 94 48.1299 94H17.7406Z"
        fill="#4D6B87"
      />
      <circle cx="9.73975" cy="88" r="8" fill="#4D6B87" />
    </svg>
  );
};

function ContainerSvg({
  name,
  lidColour = 'blue',
  bodyColour = 'blue',
  secondaryColour = 'blueMuted',
}: ContainerSvgProps) {
  const bodyClassName = classNames(styles['container-svg__body'], {
    [styles[`container-svg__body--colour-${bodyColour}`]]: bodyColour,
  });
  const lidClassName = classNames(styles['container-svg__lid'], {
    [styles[`container-svg__lid--colour-${lidColour}`]]: lidColour,
  });
  const secondaryClassName = classNames(styles['container-svg__secondary'], {
    [styles[`container-svg__secondary--colour-${secondaryColour}`]]:
      secondaryColour,
  });

  switch (name) {
    case 'Box':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 118 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={secondaryClassName}
            d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z"
            fill="#D7E7F5"
          />
          <circle
            className={secondaryClassName}
            cx="10"
            cy="88"
            r="8"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M115 63H67L68.7586 90.2575C68.8943 92.3623 70.6411 94 72.7503 94H109.25C111.359 94 113.106 92.3623 113.241 90.2575L115 63ZM87 67C85.8954 67 85 67.8954 85 69C85 70.1046 85.8954 71 87 71H95C96.1046 71 97 70.1046 97 69C97 67.8954 96.1046 67 95 67H87Z"
            fill="#2A8CC1"
          />
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M64 60C64 58.8954 64.8954 58 66 58H116C117.105 58 118 58.8954 118 60V62H64V60Z"
              fill="#2A8CC1"
            />
          )}
        </svg>
      );
    case 'Wheeled Bin':
    case 'Single Wheeled Bin':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 64 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z"
              fill="#2A8CC1"
            />
          )}
          <path
            className={bodyClassName}
            d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z"
            fill="#2A8CC1"
          />
          <circle cx="10" cy="88" r="8" fill="#4D6B87" />
        </svg>
      );
    case 'Communal Bin':
    case 'Communal Wheeled Bin':
    case 'Large Wheeled Bin':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 128 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="116" r="10" fill="#4D6B87" />
          <circle cx="104" cy="116" r="10" fill="#4D6B87" />
          <path
            d="M100 102H108V116C108 118.209 106.209 120 104 120C101.791 120 100 118.209 100 116V102Z"
            fill="#D7E7F5"
          />
          <path
            d="M20 102H28V116C28 118.209 26.2091 120 24 120C21.7909 120 20 118.209 20 116V102Z"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            d="M0 18H128V26H0V18Z"
            fill="#2A8CC1"
          />
          <path
            className={bodyClassName}
            d="M4 18H124L120.454 92.4757C120.2 97.8075 115.803 102 110.465 102H17.5351C12.1972 102 7.80036 97.8075 7.54646 92.4757L4 18Z"
            fill="#2A8CC1"
          />
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M4 12C4 5.37258 9.37258 0 16 0H112C118.627 0 124 5.37258 124 12V16H4V12Z"
              fill="#2A8CC1"
            />
          )}
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M0 12C0 9.79086 1.79086 8 4 8H124C126.209 8 128 9.79086 128 12V16H0V12Z"
              fill="#2A8CC1"
            />
          )}
        </svg>
      );
    case 'Inner Caddy':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 64 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={secondaryClassName}
            d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z"
            fill="#D7E7F5"
          />
          <circle
            className={secondaryClassName}
            cx="10"
            cy="88"
            r="8"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C8.89543 18 8 18.8954 8 20V22H12.2083L13.4692 46.2081C13.5799 48.3335 15.3355 50 17.4638 50H46.5362C48.6645 50 50.4201 48.3335 50.5308 46.2081L51.7917 22H56V20C56 18.8954 55.1046 18 54 18H52H12H10Z"
            fill="#2A8CC1"
          />
        </svg>
      );
    case 'Kerbside Caddy':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 100 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={secondaryClassName}
            d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z"
            fill="#D7E7F5"
          />
          <circle
            className={secondaryClassName}
            cx="10"
            cy="88"
            r="8"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            d="M96.8585 63H67L69.4151 90.3535C69.5973 92.4175 71.3182 94 73.3806 94H90.4779C92.5403 94 94.2612 92.4175 94.4435 90.3535L95.1075 83.833C94.8594 83.7355 94.627 83.586 94.4266 83.3847L80.3511 69.2426C79.5738 68.4615 79.5738 67.1952 80.3511 66.4142C81.1285 65.6331 82.3889 65.6331 83.1662 66.4142L95.5471 78.8537L96.8585 63Z"
            fill="#2A8CC1"
          />
          <path
            className={bodyClassName}
            d="M82.633 67.2929L96.7085 81.435C97.0972 81.8256 97.0972 82.4587 96.7085 82.8492C96.3198 83.2398 95.6896 83.2398 95.3009 82.8492L81.2255 68.7071C80.8368 68.3166 80.8368 67.6834 81.2255 67.2929C81.6142 66.9024 82.2444 66.9024 82.633 67.2929Z"
            fill="#2A8CC1"
          />
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M64 60C64 58.8954 64.8954 58 66 58H98C99.1046 58 100 58.8954 100 60V62H64V60Z"
              fill="#2A8CC1"
            />
          )}
        </svg>
      );
    case 'Kitchen Caddy':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 128 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={secondaryClassName}
            x="4"
            y="112"
            width="8"
            height="8"
            fill="#D7E7F5"
          />
          <rect
            className={secondaryClassName}
            x="116"
            y="112"
            width="8"
            height="8"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M63 38H4V110H63V38ZM59 42H55V54H59V42Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M124 38H65V110H124V38ZM73 42H69V54H73V42Z"
            fill="#D7E7F5"
          />
          <rect
            className={secondaryClassName}
            y="28"
            width="128"
            height="8"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M42 12C42 5.37258 47.3726 0 54 0C60.6274 0 66 5.37258 66 12V28H62V12C62 7.58172 58.4183 4 54 4C49.5817 4 46 7.58172 46 12L42 12Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M69 23H73V28H69V23Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M59 23H55V28H59V23Z"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            d="M107.859 75H78L80.4151 102.353C80.5973 104.418 82.3182 106 84.3806 106H101.478C103.54 106 105.261 104.418 105.443 102.353L106.107 95.833C105.859 95.7355 105.627 95.586 105.427 95.3847L91.3511 81.2426C90.5738 80.4615 90.5738 79.1952 91.3511 78.4142C92.1285 77.6331 93.3889 77.6331 94.1662 78.4142L106.547 90.8537L107.859 75Z"
            fill="#2A8CC1"
          />
          <path
            className={bodyClassName}
            d="M93.633 79.2929L107.708 93.435C108.097 93.8256 108.097 94.4587 107.708 94.8492C107.32 95.2398 106.69 95.2398 106.301 94.8492L92.2255 80.7071C91.8368 80.3166 91.8368 79.6834 92.2255 79.2929C92.6142 78.9024 93.2444 78.9024 93.633 79.2929Z"
            fill="#2A8CC1"
          />
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M75 72C75 70.8954 75.8954 70 77 70H109C110.105 70 111 70.8954 111 72V74H75V72Z"
              fill="#2A8CC1"
            />
          )}
        </svg>
      );
    case 'Reusable Sack':
    case 'Non-Reusable Sack':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 101 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={secondaryClassName}
            d="M0 4.25781C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.25781Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z"
            fill="#D7E7F5"
          />
          <circle
            className={secondaryClassName}
            cx="10"
            cy="88"
            r="8"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            d="M82.2106 33.3304L78.9322 30L75.7502 33.2325L81.5908 39.1658C72.0721 39.6468 64.5 47.6394 64.5 57.4286V84.8571C64.5 89.9066 68.5294 94 73.5 94H91.5C96.4706 94 100.5 89.9066 100.5 84.8571V57.4286C100.5 47.4483 92.6294 39.3355 82.8496 39.1462L88.6709 33.2325L85.489 30L82.2106 33.3304Z"
            fill="#228524"
          />
        </svg>
      );
    case 'Householder Provides':
    case 'Householder Provided Carrier Bag':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 104 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={secondaryClassName}
            d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z"
            fill="#D7E7F5"
          />
          <path
            className={secondaryClassName}
            d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z"
            fill="#D7E7F5"
          />
          <circle
            className={secondaryClassName}
            cx="10"
            cy="88"
            r="8"
            fill="#D7E7F5"
          />
          <path
            className={bodyClassName}
            d="M79 59C77.8954 59 77 59.8954 77 61V63H79V62C79 61.4477 79.4477 61 80 61L88 61C88.5523 61 89 61.4477 89 62V63H91V61C91 59.8954 90.1046 59 89 59H79Z"
            fill="#2A8CC1"
          />
          <path
            className={bodyClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68 78.0002L64 63.0004L84.6452 65.0004L104 63.0004L100 79.0002L104 94.0002H64L68 78.0002ZM89 75C90.1046 75 91 74.1046 91 73V67C89.8954 67 89 67.8954 89 69V72C89 72.5523 88.5523 73 88 73H80C79.4477 73 79 72.5523 79 72L79 69C79 67.8954 78.1046 67 77 67V73C77 74.1046 77.8954 75 79 75L89 75Z"
            fill="#2A8CC1"
          />
        </svg>
      );
    case 'Trollibox':
      return TrolliboxSVG(bodyClassName, lidClassName, secondaryClassName);
    case 'Trollibox Top':
      return TrolliboxSVG(bodyClassName, lidClassName, secondaryClassName, 0);
    case 'Trollibox Middle':
      return TrolliboxSVG(bodyClassName, lidClassName, secondaryClassName, 1);
    case 'Trollibox Bottom':
      return TrolliboxSVG(bodyClassName, lidClassName, secondaryClassName, 2);
    case 'Single Sack':
    case 'Single Reusable Sack':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 64 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={bodyClassName}
            d="M31.4855 4.99564L25.6572 0L20.0004 4.84873L30.3836 13.7487C13.4615 14.4703 0 26.4591 0 41.1429V82.2857C0 89.8599 7.16344 96 16 96H48C56.8366 96 64 89.8599 64 82.2857V41.1429C64 26.1725 50.0078 14.0032 32.6215 13.7194L42.9706 4.84874L37.3137 1.06267e-05L31.4855 4.99564Z"
            fill="#89C1AB"
          />
        </svg>
      );
    case 'Skip':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 160 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={bodyClassName}
            d="M0 16H160L120 78H40L0 16Z"
            fill="#89C1AB"
          />
          <path
            className={bodyClassName}
            d="M160 22L0 22L20 1.22392e-05L140 1.74846e-06L160 22Z"
            fill="#89C1AB"
          />
          <rect
            className={bodyClassName}
            y="16"
            width="160"
            height="8"
            fill="#89C1AB"
          />
        </svg>
      );
    case 'Front End Load':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 104 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={bodyClassName}
            x="4"
            y="32.1244"
            width="96"
            height="64"
            fill="#89C1AB"
          />
          <path
            className={bodyClassName}
            d="M21.0832 0H50V32H4L21.0832 0Z"
            fill="#89C1AB"
          />
          <path
            className={bodyClassName}
            d="M50 6V33H97L50 6Z"
            fill="#89C1AB"
          />
          <path
            className={bodyClassName}
            d="M0 32H104V40H0V32Z"
            fill="#89C1AB"
          />
          <path
            d="M51.9395 0.128533L98.9945 27.1244L98.9945 31.217L51.9395 4.04978L51.9395 0.128533Z"
            fill="#4D6B87"
          />
        </svg>
      );
    case 'Rear End Loader':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 197 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={bodyClassName}
            d="M4 30H192L154.4 76H41.6L4 30Z"
            fill="#89C1AB"
          />
          <path
            className={bodyClassName}
            d="M190 30L0 30L-2.62268e-06 -5.5581e-07L77.9923 -9.28147e-06L190 30Z"
            fill="#89C1AB"
          />
          <rect
            className={bodyClassName}
            y="22"
            width="160"
            height="8"
            fill="#89C1AB"
          />
          <path
            d="M98.0352 0L196.72 26.4424L195.684 30.3061L96.9999 3.8637L98.0352 0Z"
            fill="#4D6B87"
          />
          <path
            className={bodyClassName}
            d="M77 0H96L91 22H77V0Z"
            fill="#89C1AB"
          />
        </svg>
      );
    case 'Roll On Roll Off':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 160 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={bodyClassName}
            x="4"
            y="16"
            width="152"
            height="64"
            rx="4"
            fill="#89C1AB"
          />
          <path
            className={bodyClassName}
            d="M4 0H12V76C12 78.2091 10.2091 80 8 80C5.79086 80 4 78.2091 4 76V0Z"
            fill="#89C1AB"
          />
          <rect
            x="140"
            y="79.3264"
            width="8.08421"
            height="8.08421"
            rx="4.04211"
            fill="#4D6B87"
          />
          <rect
            x="12"
            y="79.3264"
            width="8.08421"
            height="8.08421"
            rx="4.04211"
            fill="#4D6B87"
          />
          <rect
            className={bodyClassName}
            y="16"
            width="160"
            height="8"
            fill="#89C1AB"
          />
        </svg>
      );
    case 'Single Food Caddy':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={bodyClassName}
            d="M28.2949 4.30554H2.58337L4.66302 27.8599C4.81995 29.6373 6.30187 31 8.07781 31H22.8004C24.5764 31 26.0583 29.6373 26.2152 27.8599L26.787 22.2451C26.5734 22.1611 26.3733 22.0324 26.2007 21.859L14.0802 9.6811C13.4108 9.00853 13.4108 7.91808 14.0802 7.24551C14.7496 6.57294 15.8349 6.57294 16.5043 7.24551L27.1656 17.9573L28.2949 4.30554Z"
            fill="#2A8CC1"
          />
          <path
            className={bodyClassName}
            d="M16.0452 8.0022L28.1657 20.1801C28.5004 20.5164 28.5004 21.0617 28.1657 21.3979C27.831 21.7342 27.2883 21.7342 26.9536 21.3979L14.8331 9.22C14.4984 8.88371 14.4984 8.33849 14.8331 8.0022C15.1678 7.66592 15.7105 7.66592 16.0452 8.0022Z"
            fill="#2A8CC1"
          />
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M0 2C0 0.895431 0.89543 0 2 0H29C30.1046 0 31 0.895431 31 2V3.44444H0V2Z"
              fill="#2A8CC1"
            />
          )}
        </svg>
      );
    case 'Single Box':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 46 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={bodyClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.4445 4.30554H2.55566L4.05369 27.7773C4.16936 29.5898 5.65734 31 7.45403 31H38.5462C40.3429 31 41.8308 29.5898 41.9465 27.7773L43.4445 4.30554ZM19.5927 7.74999C18.6518 7.74999 17.889 8.52105 17.889 9.47221C17.889 10.4234 18.6518 11.1944 19.5927 11.1944H26.4075C27.3484 11.1944 28.1112 10.4234 28.1112 9.47221C28.1112 8.52105 27.3484 7.74999 26.4075 7.74999H19.5927Z"
            fill="#2A8CC1"
          />
          {lidColour !== 'no-lid' && (
            <path
              className={lidClassName}
              d="M0 2C0 0.895431 0.895431 0 2 0H44C45.1046 0 46 0.895431 46 2V3.44444H0V2Z"
              fill="#2A8CC1"
            />
          )}
        </svg>
      );
    case 'Single Carrier Bag':
      return (
        <svg
          className={styles['container-svg']}
          viewBox="0 0 34 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={bodyClassName}
            d="M12.75 0C11.8111 0 11.05 0.767506 11.05 1.71427V3.42853H12.75V2.57141C12.75 2.09803 13.1306 1.71427 13.6 1.71427L20.4 1.71427C20.8694 1.71427 21.25 2.09803 21.25 2.57141V3.42853H22.95V1.71427C22.95 0.767506 22.1889 0 21.25 0H12.75Z"
            fill="#2A8CC1"
          />
          <path
            className={bodyClassName}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.4 16.2858L2.88099e-05 3.42887L17.5484 5.14316L34 3.42886L30.6 17.1429L34 30H0L3.4 16.2858ZM21.25 13.7142C22.1889 13.7142 22.95 12.9467 22.95 11.9999V6.8571C22.0111 6.8571 21.25 7.6246 21.25 8.57137V11.1428C21.25 11.6162 20.8694 11.9999 20.4 11.9999H13.6C13.1306 11.9999 12.75 11.6162 12.75 11.1428V8.57137C12.75 7.6246 11.9889 6.8571 11.05 6.8571V11.9999C11.05 12.9467 11.8111 13.7142 12.75 13.7142L21.25 13.7142Z"
            fill="#2A8CC1"
          />
        </svg>
      );
    case 'Bundle':
      return (
        <svg
          className={styles['container-svg']}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 128 126"
        >
          <path
            className={bodyClassName}
            fill="#228524"
            d="M.05605 4.6576C-.35494 2.21947 1.54665 0 4.04657 0H123.953c2.5 0 4.402 2.21947 3.991 4.6576l-2.697 16c-.325 1.9287-.609 3.3424-2.586 3.3424H5.33929c-1.97763 0-2.26108-1.4137-2.5862-3.3424l-2.69704-16ZM3.3165 30c0-1.1046.90563-2 2.02279-2H122.661c1.117 0 2.023.8954 2.023 2v20c0 1.1046-.906 2-2.023 2H5.33928c-1.11715 0-2.02278-.8954-2.02278-2V30ZM3.3165 58c0-1.1046.90563-2 2.02279-2H122.661c1.117 0 2.023.8954 2.023 2v20c0 1.1046-.906 2-2.023 2H5.33928c-1.11715 0-2.02278-.8954-2.02278-2V58ZM2.75309 87.3424C3.07821 85.4137 3.36165 84 5.33928 84H122.661c1.977 0 2.261 1.4137 2.586 3.3424l2.697 15.9996c.411 2.439-1.491 4.658-3.991 4.658H4.04657c-2.49992 0-4.4015-2.219-3.99052-4.658l2.69704-15.9996Z"
          />
          <path
            fill="#4D6B87"
            d="M4 114c0-1.105.89543-2 2-2h116c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H6c-1.10457 0-2-.895-2-2v-12Z"
          />
          <path
            fill="#D7E7F5"
            d="M4 82c0-1.1046.89543-2 2-2h116c1.105 0 2 .8954 2 2s-.895 2-2 2H6c-1.10457 0-2-.8954-2-2ZM4 54c0-1.1046.89543-2 2-2h116c1.105 0 2 .8954 2 2s-.895 2-2 2H6c-1.10457 0-2-.8954-2-2ZM4 26c0-1.1046.89543-2 2-2h116c1.105 0 2 .8954 2 2s-.895 2-2 2H6c-1.10457 0-2-.8954-2-2Z"
          />
        </svg>
      );
    case 'Roll Cage':
      return (
        <svg
          className={styles['container-svg']}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 90 150"
        >
          <path
            fill="#4D6B87"
            d="M9.75537 124H73.7554v14c0 1.657-1.3432 3-3 3-1.6569 0-3-1.343-3-3v-6h-.0044v-4H15.7598v4h-.0044v6c0 1.657-1.3432 3-3 3-1.6569 0-3.00003-1.343-3.00003-3v-14Z"
          />
          <path
            fill="#4D6B87"
            d="M65.7554 129.338c-2.989 1.729-5 4.961-5 8.662 0 5.523 4.4771 10 10 10 5.5228 0 10-4.477 10-10 0-3.701-2.011-6.933-5-8.662V138c0 2.761-2.2386 5-5 5-2.7615 0-5-2.239-5-5v-8.662ZM2.75537 138c0-3.701 2.01099-6.933 5-8.662V138c0 2.761 2.23858 5 5.00003 5 2.7614 0 5-2.239 5-5v-8.662c2.989 1.729 5 4.961 5 8.662 0 5.523-4.4772 10-10 10-5.52288 0-10.00003-4.477-10.00003-10Z"
          />
          <path
            className={bodyClassName}
            fill="#228524"
            fillRule="evenodd"
            d="M80.7554 53h-8v18h8V53Zm-4 1c-1.1046 0-2 .8954-2 2v12c0 1.1046.8954 2 2 2 1.1045 0 2-.8954 2-2V56c0-1.1046-.8955-2-2-2Z"
            clipRule="evenodd"
          />
          <path
            className={bodyClassName}
            fill="#228524"
            fillRule="evenodd"
            d="M76.7554 0H6.75537c-3.31371 0-6 2.6863-6 6v112c0 3.314 2.68629 6 6 6H76.7554c3.3137 0 6-2.686 6-6V6c0-3.31371-2.6863-6-6-6ZM2.75537 6c0-2.20914 1.79086-4 4-4h4.00003v9H2.75537V6Zm0 7v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v8h8.00003v-8H2.75537Zm0 10v5c0 2.209 1.79086 4 4 4h4.00003v-9H2.75537Zm10.00003 9h8v-9h-8v9Zm10 0h8v-9h-8v9Zm10 0h8v-9h-8v9Zm10 0h8v-9h-8v9Zm10 0h8v-9h-8v9Zm10 0h8v-9h-8v9Zm10 0h4c2.2091 0 4-1.791 4-4v-5h-8v9Zm8-11v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10V61h-8v10h8Zm0-10v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10v-8h-8v8h8Zm0-10V6c0-2.20914-1.7909-4-4-4h-4v9h8Zm-10-9h-8v9h8V2Zm-10 0h-8v9h8V2Zm-10 0h-8v9h8V2Zm-10 0h-8v9h8V2Zm-10 0h-8v9h8V2Zm-10 0h-8v9h8V2Zm0 109h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm2 0v-8h8v8h-8Zm10 0v-8h8v8h-8Zm10 0v-8h8v8h-8Zm10 0v-8h8v8h-8Zm10 0v-8h8v8h-8Zm0 2h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm-2 0v8h-8v-8h8Zm-10 0v8h-8v-8h8Zm-10 0v8h-8v-8h8Zm-10 0v8h-8v-8h8Zm0-2h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm2 0v-8h8v8h-8Zm10 0v-8h8v8h-8Zm10 0v-8h8v8h-8Zm0 2h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm-2 0v8h-8v-8h8Zm-10 0v8h-8v-8h8Zm0-2h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm0-10h-8v-8h8v8Zm2 0v-8h8v8h-8Zm0 2h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Zm0 10h8v8h-8v-8Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default ContainerSvg;
