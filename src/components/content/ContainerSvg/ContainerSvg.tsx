import React from 'react';
import classNames from 'classnames';

import { Colour } from 'lib/container';

import styles from './ContainerSvg.module.scss';

interface ContainerSvgProps {
  name: string;
  lidColour?: Colour | 'no-lid';
  bodyColour?: Colour;
}

function ContainerSvg(
  { name, lidColour, bodyColour }: ContainerSvgProps,
) {
  const bodyClassName = classNames(styles['container-svg__body'], {
    [styles[`container-svg__body--colour-${bodyColour}`]]: bodyColour,
  });
  const lidClassName = classNames(styles['container-svg__lid'], {
    [styles[`container-svg__lid--colour-${lidColour}`]]: lidColour,
  });

  switch (name) {
    case 'Box':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 118 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z" fill="#D7E7F5" />
          <path d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z" fill="#D7E7F5" />
          <circle cx="10" cy="88" r="8" fill="#D7E7F5" />
          <path className={bodyClassName} fillRule="evenodd" clipRule="evenodd" d="M115 63H67L68.7586 90.2575C68.8943 92.3623 70.6411 94 72.7503 94H109.25C111.359 94 113.106 92.3623 113.241 90.2575L115 63ZM87 67C85.8954 67 85 67.8954 85 69C85 70.1046 85.8954 71 87 71H95C96.1046 71 97 70.1046 97 69C97 67.8954 96.1046 67 95 67H87Z" fill="#2A8CC1" />
          {lidColour !== 'no-lid' && <path className={lidClassName} d="M64 60C64 58.8954 64.8954 58 66 58H116C117.105 58 118 58.8954 118 60V62H64V60Z" fill="#2A8CC1" />}
        </svg>
      );
    case 'Wheeled Bin':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          {lidColour !== 'no-lid' && <path className={lidClassName} d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z" fill="#2A8CC1" />}
          <path className={bodyClassName} d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z" fill="#2A8CC1" />
          <circle cx="10" cy="88" r="8" fill="#4D6B87" />
        </svg>
      );
    case 'Communal Bin':
    case 'Communal Wheeled Bin':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 128 126" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="116" r="10" fill="#4D6B87" />
          <circle cx="104" cy="116" r="10" fill="#4D6B87" />
          <path d="M100 102H108V116C108 118.209 106.209 120 104 120C101.791 120 100 118.209 100 116V102Z" fill="#D7E7F5" />
          <path d="M20 102H28V116C28 118.209 26.2091 120 24 120C21.7909 120 20 118.209 20 116V102Z" fill="#D7E7F5" />
          <path className={bodyClassName} d="M0 18H128V26H0V18Z" fill="#2A8CC1" />
          <path className={bodyClassName} d="M4 18H124L120.454 92.4757C120.2 97.8075 115.803 102 110.465 102H17.5351C12.1972 102 7.80036 97.8075 7.54646 92.4757L4 18Z" fill="#2A8CC1" />
          {lidColour !== 'no-lid' && <path className={lidClassName} d="M4 12C4 5.37258 9.37258 0 16 0H112C118.627 0 124 5.37258 124 12V16H4V12Z" fill="#2A8CC1" />}
          {lidColour !== 'no-lid' && <path className={lidClassName} d="M0 12C0 9.79086 1.79086 8 4 8H124C126.209 8 128 9.79086 128 12V16H0V12Z" fill="#2A8CC1" />}
        </svg>
      );
    case 'Inner Caddy':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 64 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z" fill="#D7E7F5" />
          <path d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z" fill="#D7E7F5" />
          <circle cx="10" cy="88" r="8" fill="#D7E7F5" />
          <path className={bodyClassName} fillRule="evenodd" clipRule="evenodd" d="M10 18C8.89543 18 8 18.8954 8 20V22H12.2083L13.4692 46.2081C13.5799 48.3335 15.3355 50 17.4638 50H46.5362C48.6645 50 50.4201 48.3335 50.5308 46.2081L51.7917 22H56V20C56 18.8954 55.1046 18 54 18H52H12H10Z" fill="#2A8CC1" />
        </svg>
      );
    case 'Kerbside Caddy':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z" fill="#D7E7F5" />
          <path d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z" fill="#D7E7F5" />
          <circle cx="10" cy="88" r="8" fill="#D7E7F5" />
          <path className={bodyClassName} d="M96.8585 63H67L69.4151 90.3535C69.5973 92.4175 71.3182 94 73.3806 94H90.4779C92.5403 94 94.2612 92.4175 94.4435 90.3535L95.1075 83.833C94.8594 83.7355 94.627 83.586 94.4266 83.3847L80.3511 69.2426C79.5738 68.4615 79.5738 67.1952 80.3511 66.4142C81.1285 65.6331 82.3889 65.6331 83.1662 66.4142L95.5471 78.8537L96.8585 63Z" fill="#2A8CC1" />
          <path className={bodyClassName} d="M82.633 67.2929L96.7085 81.435C97.0972 81.8256 97.0972 82.4587 96.7085 82.8492C96.3198 83.2398 95.6896 83.2398 95.3009 82.8492L81.2255 68.7071C80.8368 68.3166 80.8368 67.6834 81.2255 67.2929C81.6142 66.9024 82.2444 66.9024 82.633 67.2929Z" fill="#2A8CC1" />
          {lidColour !== 'no-lid' && <path className={lidClassName} d="M64 60C64 58.8954 64.8954 58 66 58H98C99.1046 58 100 58.8954 100 60V62H64V60Z" fill="#2A8CC1" />}
        </svg>
      );
    case 'Kitchen Caddy':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 128 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="112" width="8" height="8" fill="#D7E7F5" />
          <rect x="116" y="112" width="8" height="8" fill="#D7E7F5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M63 38H4V110H63V38ZM59 42H55V54H59V42Z" fill="#D7E7F5" />
          <path fillRule="evenodd" clipRule="evenodd" d="M124 38H65V110H124V38ZM73 42H69V54H73V42Z" fill="#D7E7F5" />
          <rect y="28" width="128" height="8" fill="#D7E7F5" />
          <path d="M42 12C42 5.37258 47.3726 0 54 0C60.6274 0 66 5.37258 66 12V28H62V12C62 7.58172 58.4183 4 54 4C49.5817 4 46 7.58172 46 12L42 12Z" fill="#D7E7F5" />
          <path d="M69 23H73V28H69V23Z" fill="#D7E7F5" />
          <path d="M59 23H55V28H59V23Z" fill="#D7E7F5" />
          <path className={bodyClassName} d="M107.859 75H78L80.4151 102.353C80.5973 104.418 82.3182 106 84.3806 106H101.478C103.54 106 105.261 104.418 105.443 102.353L106.107 95.833C105.859 95.7355 105.627 95.586 105.427 95.3847L91.3511 81.2426C90.5738 80.4615 90.5738 79.1952 91.3511 78.4142C92.1285 77.6331 93.3889 77.6331 94.1662 78.4142L106.547 90.8537L107.859 75Z" fill="#2A8CC1" />
          <path className={bodyClassName} d="M93.633 79.2929L107.708 93.435C108.097 93.8256 108.097 94.4587 107.708 94.8492C107.32 95.2398 106.69 95.2398 106.301 94.8492L92.2255 80.7071C91.8368 80.3166 91.8368 79.6834 92.2255 79.2929C92.6142 78.9024 93.2444 78.9024 93.633 79.2929Z" fill="#2A8CC1" />
          {lidColour !== 'no-lid' && <path className={lidClassName} d="M75 72C75 70.8954 75.8954 70 77 70H109C110.105 70 111 70.8954 111 72V74H75V72Z" fill="#2A8CC1" />}
        </svg>
      );
    case 'Reusable Sack':
    case 'Non-Reusable Sack':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 101 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.25781C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.25781Z" fill="#D7E7F5" />
          <path d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z" fill="#D7E7F5" />
          <circle cx="10" cy="88" r="8" fill="#D7E7F5" />
          <path className={bodyClassName} d="M82.2106 33.3304L78.9322 30L75.7502 33.2325L81.5908 39.1658C72.0721 39.6468 64.5 47.6394 64.5 57.4286V84.8571C64.5 89.9066 68.5294 94 73.5 94H91.5C96.4706 94 100.5 89.9066 100.5 84.8571V57.4286C100.5 47.4483 92.6294 39.3355 82.8496 39.1462L88.6709 33.2325L85.489 30L82.2106 33.3304Z" fill="#228524" />
        </svg>
      );
    case 'Householder Provides':
    case 'Householder Provided Carrier Bag':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 104 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.2578C0 1.95052 1.94672 0.12167 4.24951 0.265595L60.2495 3.76559C62.3577 3.89735 64 5.64555 64 7.7578V12H0V4.2578Z" fill="#D7E7F5" />
          <path d="M60 14H4L7.21958 78.3916C8.10228 78.1366 9.03518 78 10 78C15.5228 78 20 82.4771 20 88C20 90.2512 19.2561 92.3287 18.0007 94H48.39C52.653 94 56.1671 90.6572 56.38 86.3995L60 14Z" fill="#D7E7F5" />
          <circle cx="10" cy="88" r="8" fill="#D7E7F5" />
          <path className={bodyClassName} d="M79 59C77.8954 59 77 59.8954 77 61V63H79V62C79 61.4477 79.4477 61 80 61L88 61C88.5523 61 89 61.4477 89 62V63H91V61C91 59.8954 90.1046 59 89 59H79Z" fill="#2A8CC1" />
          <path className={bodyClassName} fillRule="evenodd" clipRule="evenodd" d="M68 78.0002L64 63.0004L84.6452 65.0004L104 63.0004L100 79.0002L104 94.0002H64L68 78.0002ZM89 75C90.1046 75 91 74.1046 91 73V67C89.8954 67 89 67.8954 89 69V72C89 72.5523 88.5523 73 88 73H80C79.4477 73 79 72.5523 79 72L79 69C79 67.8954 78.1046 67 77 67V73C77 74.1046 77.8954 75 79 75L89 75Z" fill="#2A8CC1" />
        </svg>
      );
    case 'Trollibox':
      return (
        <svg className={styles['container-svg']} viewBox="0 0 65 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={bodyClassName} d="M10.7397 54C10.7397 52.8954 11.6352 52 12.7397 52H62.7397C63.8443 52 64.7397 52.8954 64.7397 54V56H10.7397V54Z" fill="#2A8CC1" />
          <path className={bodyClassName} fillRule="evenodd" clipRule="evenodd" d="M13.7397 57H61.7397L59.9812 84.2575C59.8454 86.3623 58.0987 88 55.9895 88H19.7397C19.7397 84.4916 17.933 81.4051 15.1991 79.6204L13.7397 57ZM31.7397 63C31.7397 61.8954 32.6352 61 33.7397 61H41.7397C42.8443 61 43.7397 61.8954 43.7397 63C43.7397 64.1046 42.8443 65 41.7397 65H33.7397C32.6352 65 31.7397 64.1046 31.7397 63Z" fill="#2A8CC1" />
          <path className={bodyClassName} fillRule="evenodd" clipRule="evenodd" d="M61.7397 27H13.7397L15.4983 46.2575C15.6341 48.3623 17.3808 50 19.49 50H55.9895C58.0987 50 59.8454 48.3623 59.9812 46.2575L61.7397 27ZM33.7397 31C32.6352 31 31.7397 31.8954 31.7397 33C31.7397 34.1046 32.6352 35 33.7397 35H41.7397C42.8443 35 43.7397 34.1046 43.7397 33C43.7397 31.8954 42.8443 31 41.7397 31H33.7397Z" fill="#2A8CC1" />
          <path className={bodyClassName} d="M10.7397 24C10.7397 22.8954 11.6352 22 12.7397 22H62.7397C63.8443 22 64.7397 22.8954 64.7397 24V26H10.7397V24Z" fill="#2A8CC1" />
          <path className={bodyClassName} fillRule="evenodd" clipRule="evenodd" d="M61.7397 5H13.7397L15.4983 16.2575C15.6341 18.3623 17.3808 20 19.49 20H55.9895C58.0987 20 59.8454 18.3623 59.9812 16.2575L61.7397 5ZM33.7397 9C32.6352 9 31.7397 9.89543 31.7397 11C31.7397 12.1046 32.6352 13 33.7397 13H41.7397C42.8443 13 43.7397 12.1046 43.7397 11C43.7397 9.89543 42.8443 9 41.7397 9H33.7397Z" fill="#2A8CC1" />
          <path className={bodyClassName} d="M10.7397 2C10.7397 0.895431 11.6352 0 12.7397 0H62.7397C63.8443 0 64.7397 0.895431 64.7397 2V4H10.7397V2Z" fill="#2A8CC1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M1.01405 6.44664C0.0612497 6.99674 -0.27894 8.20635 0.247444 9.17245L3.82701 15.7422L6.95948 78.3916C7.84218 78.1367 8.77508 78 9.7399 78C10.2058 78 10.6643 78.0319 11.1132 78.0935L7.73979 14.0003L7.74008 14.0001L3.78088 7.1841C3.21951 6.21768 1.98194 5.88783 1.01405 6.44664ZM17.7406 94C18.6141 92.8372 19.2399 91.4778 19.5399 90H55.0596C53.6729 92.3982 51.0808 94 48.1299 94H17.7406Z" fill="#4D6B87" />
          <circle cx="9.73975" cy="88" r="8" fill="#4D6B87" />
        </svg>
      );
    default:
      return null;
  }
}

ContainerSvg.defaultProps = {
  bodyColour: 'blue',
  lidColour: 'blue',
};

export default ContainerSvg;
