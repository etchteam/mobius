import classNames from 'classnames';
import React from 'react';

import styles from './VehicleSvg.module.scss';

import { Colors } from 'src/types/colors.type';

export interface VehicleSvgProps {
  readonly name: string;
  readonly color?: Colors;
}

function VehicleSvg({ name, color = 'no-stream' }: VehicleSvgProps) {
  const className = classNames(styles['vehicle-svg'], {
    [styles[`vehicle-svg--color-${color}`]]: color,
  });

  switch (name) {
    case 'resourceRecoveryVehicle':
    case 'Resource recovery vehicle':
    case 'Five compartment stillage vehicle':
    case 'Four compartment stillage vehicle':
      return (
        <svg
          className={styles['vehicle-svg']}
          viewBox="0 0 65 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={className}
            d="M51.9996 32C49.0545 32 46.6637 29.6118 46.6637 26.6642C46.6637 23.719 49.0545 21.3333 51.9996 21.3333C53.4178 21.3333 54.7727 21.8948 55.7709 22.8928C56.772 23.8939 57.3335 25.2549 57.3335 26.6642C57.3335 29.6124 54.9466 32 51.9996 32ZM51.9996 28.6694C53.1049 28.6694 54.0038 27.771 54.0038 26.6642C54.0038 25.5623 53.1054 24.664 51.9996 24.664C50.8977 24.664 49.9983 25.5623 49.9983 26.6642C49.9983 27.77 50.8972 28.6694 51.9996 28.6694Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M13.9997 32C11.0566 32 8.66667 29.6118 8.66667 26.6642C8.66667 23.719 11.0566 21.3333 13.9997 21.3333C15.4143 21.3333 16.7689 21.8948 17.7697 22.8928C18.7725 23.8939 19.3333 25.2549 19.3333 26.6642C19.3338 29.6124 16.9428 32 13.9997 32ZM13.9997 28.6694C15.1067 28.6694 15.9992 27.771 15.9992 26.6642C15.9992 25.5623 15.1067 24.664 13.9997 24.664C12.8942 24.664 12.0017 25.5623 12.0017 26.6642C12.0007 27.77 12.8942 28.6694 13.9997 28.6694Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M27.3328 31.9959C24.3888 31.9959 22 29.6087 22 26.6621C22 23.7181 24.3898 21.3333 27.3328 21.3333C28.7464 21.3333 30.1019 21.8946 31.1037 22.8922C32.1009 23.893 32.6667 25.2534 32.6667 26.6621C32.6662 29.6092 30.2762 31.9959 27.3328 31.9959ZM27.3328 28.6665C28.4342 28.6665 29.3322 27.7686 29.3322 26.6621C29.3322 25.5607 28.4342 24.6627 27.3328 24.6627C26.2273 24.6627 25.3333 25.5607 25.3333 26.6621C25.3328 27.7676 26.2273 28.6665 27.3328 28.6665Z"
            fill="#2595E8"
          />
          <path
            className={className}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.66667 0.0263672C0.666667 0.0263672 0 0.666585 0 2.66659V23.6339C0 25.3241 1.19627 26.692 2.63581 26.692L7.33333 26.6666C7.33333 26.6666 7.33333 19.9999 14 19.9999C20.6667 19.9999 20.6667 26.6666 20.6667 26.6666C20.6667 26.6666 20.6667 19.9999 27.3333 19.9999C34 19.9999 34 26.6666 34 26.6666H45.3333C45.3333 26.6666 45.3333 19.9999 52 19.9999C58.6667 19.9999 58.6667 26.6931 58.6667 26.6931H61.7881C63.0373 26.6931 64.0394 25.5074 64.0394 24.0424V18.2944C64.0394 16.5013 63.7577 15.8328 63.4419 15.0835C63.3596 14.888 63.2749 14.687 63.1923 14.4591L59.8747 5.18741C59.2924 3.46302 58.5513 2.54436 56.4661 2.54436L45.0289 2.54249C43.7941 2.54249 43.2753 3.32388 43.2753 4.50112V18.1175C43.2753 18.6577 42.842 19.0966 42.3004 19.0966C41.7588 19.0966 41.3254 18.6577 41.3254 18.1175V1.30435C41.3254 0.387106 40.8315 0.026382 39.8915 0.026382L2.66667 0.0263672ZM48.3465 6.24375H55.188C56.0939 6.24375 56.3816 6.24375 56.7209 7.07948L58.8455 12.9244C58.9979 13.6268 58.8455 14.3616 57.9042 14.3616H48.3363L48.3125 14.3556C47.6439 14.1852 47.3422 14.1083 47.3422 13.3633V7.25983C47.3413 6.60773 47.4957 6.24375 48.3465 6.24375ZM2.66667 4C2.66667 3.26362 3.26362 2.66667 4 2.66667H9.33333C10.0697 2.66667 10.6667 3.26362 10.6667 4V6.66667C10.6667 7.40305 10.0697 8 9.33333 8H4C3.26362 8 2.66667 7.40305 2.66667 6.66667V4ZM4 9.33333C3.26362 9.33333 2.66667 9.93029 2.66667 10.6667V13.3333C2.66667 14.0697 3.26362 14.6667 4 14.6667H9.33333C10.0697 14.6667 10.6667 14.0697 10.6667 13.3333V10.6667C10.6667 9.93029 10.0697 9.33333 9.33333 9.33333H4ZM2.66667 17.3333C2.66667 16.597 3.26362 16 4 16H9.33333C10.0697 16 10.6667 16.597 10.6667 17.3333C10.6667 18.0697 10.0697 18.6667 9.33333 18.6667H4C3.26362 18.6667 2.66667 18.0697 2.66667 17.3333ZM22.6667 16C21.9303 16 21.3333 16.597 21.3333 17.3333C21.3333 18.0697 21.9303 18.6667 22.6667 18.6667H28C28.7364 18.6667 29.3333 18.0697 29.3333 17.3333C29.3333 16.597 28.7364 16 28 16H22.6667ZM21.3333 10.6667C21.3333 9.93029 21.9303 9.33333 22.6667 9.33333H28C28.7364 9.33333 29.3333 9.93029 29.3333 10.6667V13.3333C29.3333 14.0697 28.7364 14.6667 28 14.6667H22.6667C21.9303 14.6667 21.3333 14.0697 21.3333 13.3333V10.6667ZM22.6667 2.66667C21.9303 2.66667 21.3333 3.26362 21.3333 4V6.66667C21.3333 7.40305 21.9303 8 22.6667 8H28C28.7364 8 29.3333 7.40305 29.3333 6.66667V4C29.3333 3.26362 28.7364 2.66667 28 2.66667H22.6667ZM30.6667 4C30.6667 3.26362 31.2636 2.66667 32 2.66667H37.3333C38.0697 2.66667 38.6667 3.26362 38.6667 4V17.3333C38.6667 18.0697 38.0697 18.6667 37.3333 18.6667H32C31.2636 18.6667 30.6667 18.0697 30.6667 17.3333V4ZM13.3333 2.66667C12.597 2.66667 12 3.26362 12 4V17.3333C12 18.0697 12.597 18.6667 13.3333 18.6667H18.6667C19.403 18.6667 20 18.0697 20 17.3333V4C20 3.26362 19.403 2.66667 18.6667 2.66667H13.3333Z"
            fill="#2595E8"
          />
        </svg>
      );

    case 'separateFoodWasteRCV':
    case 'Separate food waste RCV (7.5t)':
    case 'Small single compartment RCV':
    case 'Small single compartment RCV with plastic film pod':
    case 'Food pod split 2 compartment RCV':
      return (
        <svg
          className={styles['vehicle-svg']}
          viewBox="0 0 64 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={className}
            d="M44.7608 32C41.8157 32 39.425 29.6118 39.425 26.6642C39.425 23.719 41.8157 21.3333 44.7608 21.3333C46.179 21.3333 47.534 21.8948 48.5321 22.8928C49.5332 23.8939 50.0947 25.2549 50.0947 26.6642C50.0947 29.6124 47.7078 32 44.7608 32ZM44.7608 28.6694C45.8662 28.6694 46.765 27.771 46.765 26.6642C46.765 25.5623 45.8666 24.664 44.7608 24.664C43.6589 24.664 42.7596 25.5623 42.7596 26.6642C42.7596 27.77 43.6584 28.6694 44.7608 28.6694Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M13.4273 31.9959C10.4833 31.9959 8.09456 29.6087 8.09456 26.6621C8.09456 23.7181 10.4844 21.3333 13.4273 21.3333C14.841 21.3333 16.1965 21.8946 17.1982 22.8922C18.1954 23.893 18.7612 25.2534 18.7612 26.6621C18.7607 29.6092 16.3708 31.9959 13.4273 31.9959ZM13.4273 28.6665C14.5288 28.6665 15.4268 27.7686 15.4268 26.6621C15.4268 25.5607 14.5288 24.6627 13.4273 24.6627C12.3219 24.6627 11.4279 25.5607 11.4279 26.6621C11.4274 27.7676 12.3219 28.6665 13.4273 28.6665Z"
            fill="#2595E8"
          />
          <path
            className={className}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.6528 0.0263672C33.5928 0.0263672 34.0867 0.387091 34.0867 1.30433V18.1175C34.0867 18.6577 34.5201 19.0966 35.0617 19.0966C35.6033 19.0966 36.0366 18.6577 36.0366 18.1175V4.50111C36.0366 3.32386 36.5554 2.54247 37.7902 2.54247L49.2274 2.54435C51.3126 2.54435 52.0537 3.463 52.636 5.1874L55.9536 14.4591C56.0362 14.687 56.1209 14.888 56.2033 15.0835C56.519 15.8328 56.8007 16.5013 56.8007 18.2944V24.0424C56.8007 25.5074 55.7986 26.693 54.5494 26.693H51.428C51.428 26.693 51.428 19.9999 44.7613 19.9999C38.0946 19.9999 38.0946 26.6666 38.0946 26.6666H20.0946C20.0946 26.6666 20.0946 19.9999 13.4279 19.9999C6.76126 19.9999 6.76119 26.6667 6.76119 26.6667L2.63581 26.692C1.19627 26.692 0 25.3241 0 23.6338V17.9098C0 16.9068 0.167203 16.3278 0.813753 15.3023L9.35369 1.78305C10.255 0.353366 11.2877 0.0263759 13.4279 0.0263759L32.6528 0.0263672ZM47.9493 6.24373H41.1079C40.257 6.24373 40.1026 6.60772 40.1035 7.25982V13.3633C40.1035 14.1083 40.4052 14.1852 41.0738 14.3556L41.0976 14.3616H50.6655C51.6069 14.3616 51.7592 13.6267 51.6068 12.9244L49.4822 7.07947C49.1429 6.24373 48.8552 6.24373 47.9493 6.24373ZM13.2561 3.93866C13.4513 3.62641 13.3563 3.21512 13.0441 3.02001C12.7318 2.8249 12.3205 2.91985 12.1254 3.2321L4.35326 15.6701C4.15815 15.9824 4.25311 16.3937 4.56535 16.5888C4.87759 16.7839 5.28888 16.6889 5.48399 16.3767L13.2561 3.93866Z"
            fill="#2595E8"
          />
        </svg>
      );

    case 'twinCompartmentRCV':
    case 'Twin compartment RCV (26t)':
    case '50-50 split 2 compartment RCV':
    case '65-35 split 2 compartment RCV':
    case '70-30 split 2 compartment RCV':
      return (
        <svg
          className={styles['vehicle-svg']}
          viewBox="0 0 65 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={className}
            d="M51.9996 32C49.0545 32 46.6637 29.6118 46.6637 26.6642C46.6637 23.719 49.0545 21.3333 51.9996 21.3333C53.4178 21.3333 54.7727 21.8948 55.7709 22.8928C56.772 23.8939 57.3335 25.2549 57.3335 26.6642C57.3335 29.6124 54.9466 32 51.9996 32ZM51.9996 28.6694C53.1049 28.6694 54.0038 27.771 54.0038 26.6642C54.0038 25.5623 53.1054 24.664 51.9996 24.664C50.8977 24.664 49.9983 25.5623 49.9983 26.6642C49.9983 27.77 50.8972 28.6694 51.9996 28.6694Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M13.9997 32C11.0566 32 8.66667 29.6118 8.66667 26.6642C8.66667 23.719 11.0566 21.3333 13.9997 21.3333C15.4143 21.3333 16.7689 21.8948 17.7697 22.8928C18.7725 23.8939 19.3333 25.2549 19.3333 26.6642C19.3338 29.6124 16.9428 32 13.9997 32ZM13.9997 28.6694C15.1067 28.6694 15.9992 27.771 15.9992 26.6642C15.9992 25.5623 15.1067 24.664 13.9997 24.664C12.8942 24.664 12.0017 25.5623 12.0017 26.6642C12.0007 27.77 12.8942 28.6694 13.9997 28.6694Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M27.3328 31.9959C24.3888 31.9959 22 29.6087 22 26.6621C22 23.7181 24.3898 21.3333 27.3328 21.3333C28.7464 21.3333 30.1019 21.8946 31.1037 22.8922C32.1009 23.893 32.6667 25.2534 32.6667 26.6621C32.6662 29.6092 30.2762 31.9959 27.3328 31.9959ZM27.3328 28.6665C28.4342 28.6665 29.3322 27.7686 29.3322 26.6621C29.3322 25.5607 28.4342 24.6627 27.3328 24.6627C26.2273 24.6627 25.3333 25.5607 25.3333 26.6621C25.3328 27.7676 26.2273 28.6665 27.3328 28.6665Z"
            fill="#2595E8"
          />
          <path
            className={className}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4279 0.0263759C11.2877 0.0263759 10.255 0.353366 9.35369 1.78305L0.813753 15.3023C0.167203 16.3278 0 16.9068 0 17.9098V23.6338C0 25.3241 1.19627 26.692 2.63581 26.692L7.33333 26.6666C7.33333 26.6666 7.33333 19.9999 14 19.9999C20.6667 19.9999 20.6667 26.6666 20.6667 26.6666C20.6667 26.6666 20.6667 19.9999 27.3333 19.9999C34 19.9999 34 26.6666 34 26.6666H45.3333C45.3333 26.6666 45.3333 19.9999 52 19.9999C58.6667 19.9999 58.6667 26.693 58.6667 26.693H61.7881C63.0373 26.693 64.0394 25.5074 64.0394 24.0424V18.2944C64.0394 16.5013 63.7577 15.8328 63.4419 15.0835C63.3596 14.888 63.2749 14.687 63.1923 14.4591L59.8747 5.1874C59.2924 3.463 58.5513 2.54435 56.4661 2.54435L45.0289 2.54247C43.7941 2.54247 43.2753 3.32386 43.2753 4.50111V18.1175C43.2753 18.6577 42.842 19.0966 42.3004 19.0966C41.7588 19.0966 41.3254 18.6577 41.3254 18.1175V1.30433C41.3254 0.387091 40.8315 0.0263672 39.8915 0.0263672L13.4279 0.0263759ZM48.3465 6.24373H55.188C56.0939 6.24373 56.3816 6.24373 56.7209 7.07947L58.8455 12.9244C58.9979 13.6267 58.8455 14.3616 57.9042 14.3616H48.3363L48.3125 14.3556C47.6439 14.1852 47.3422 14.1083 47.3422 13.3633V7.25982C47.3413 6.60772 47.4957 6.24373 48.3465 6.24373ZM13.0441 3.02001C13.3563 3.21512 13.4513 3.62641 13.2561 3.93866L5.48399 16.3767C5.28888 16.6889 4.87759 16.7839 4.56535 16.5888C4.25311 16.3937 4.15815 15.9824 4.35326 15.6701L12.1254 3.2321C12.3205 2.91985 12.7318 2.8249 13.0441 3.02001ZM17.2561 3.93866C17.4513 3.62641 17.3563 3.21512 17.0441 3.02001C16.7318 2.8249 16.3205 2.91985 16.1254 3.2321L8.35326 15.6701C8.15815 15.9824 8.25311 16.3937 8.56535 16.5888C8.87759 16.7839 9.28888 16.6889 9.48399 16.3767L17.2561 3.93866Z"
            fill="#2595E8"
          />
        </svg>
      );

    case 'singleCompartmentRCV':
    case 'Single compartment RCV (26t)':
    case 'Single compartment RCV with recycling compaction':
    case 'Single compartment RCV with refuse compaction':
      return (
        <svg
          className={styles['vehicle-svg']}
          viewBox="0 0 65 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={className}
            d="M51.9996 31.9999C49.0545 31.9999 46.6637 29.6118 46.6637 26.6641C46.6637 23.719 49.0545 21.3333 51.9996 21.3333C53.4178 21.3333 54.7727 21.8947 55.7709 22.8928C56.772 23.8939 57.3335 25.2549 57.3335 26.6641C57.3335 29.6123 54.9467 31.9999 51.9997 31.9999H51.9996ZM51.9996 28.6693C53.1049 28.6693 54.0038 27.771 54.0038 26.6641C54.0038 25.5622 53.1054 24.6639 51.9996 24.6639C50.8977 24.6639 49.9983 25.5622 49.9983 26.6641C49.9983 27.77 50.8972 28.6693 51.9996 28.6693Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M13.9997 31.9999C11.0566 31.9999 8.66667 29.6118 8.66667 26.6641C8.66667 23.719 11.0566 21.3333 13.9997 21.3333C15.4143 21.3333 16.7689 21.8947 17.7697 22.8928C18.7725 23.8939 19.3333 25.2549 19.3333 26.6641C19.3338 29.6123 16.9429 31.9999 13.9998 31.9999H13.9997ZM13.9997 28.6693C15.1067 28.6693 15.9992 27.771 15.9992 26.6641C15.9992 25.5622 15.1067 24.6639 13.9997 24.6639C12.8942 24.6639 12.0017 25.5622 12.0017 26.6641C12.0007 27.77 12.8942 28.6693 13.9997 28.6693Z"
            fill="#2595E8"
          />
          <path
            className={className}
            d="M27.3328 31.9958C24.3888 31.9958 22 29.6086 22 26.662C22 23.718 24.3898 21.3333 27.3328 21.3333C28.7464 21.3333 30.1019 21.8945 31.1037 22.8922C32.1009 23.8929 32.6667 25.2533 32.6667 26.662C32.6662 29.6091 30.2764 31.9958 27.3329 31.9958H27.3328ZM27.3328 28.6665C28.4342 28.6665 29.3322 27.7685 29.3322 26.662C29.3322 25.5606 28.4342 24.6626 27.3328 24.6626C26.2273 24.6626 25.3333 25.5606 25.3333 26.662C25.3328 27.7675 26.2273 28.6665 27.3328 28.6665Z"
            fill="#2595E8"
          />
          <path
            className={className}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.188 6.24373H48.3465C47.4957 6.24373 47.3413 6.60772 47.3422 7.25981V13.3633C47.3422 14.1083 47.6439 14.1852 48.3125 14.3556L48.3363 14.3616H57.9042C58.8455 14.3616 58.9979 13.6267 58.8455 12.9244L56.7209 7.07947C56.3816 6.24373 56.0939 6.24373 55.188 6.24373ZM31.7396 0.0263759H33.9144L39.8915 0.0263672C40.8315 0.0263672 41.3254 0.387091 41.3254 1.30433V2.29372V3.32809V4.85715V7.3756V18.1175C41.3254 18.6577 41.7588 19.0966 42.3004 19.0966C42.842 19.0966 43.2753 18.6577 43.2753 18.1175V4.5011C43.2753 3.32386 43.7941 2.54247 45.0289 2.54247L56.4661 2.54435C58.5513 2.54435 59.2924 3.463 59.8747 5.1874L63.1923 14.4591C63.2749 14.687 63.3596 14.888 63.4419 15.0835C63.7577 15.8328 64.0394 16.5013 64.0394 18.2944V24.0424C64.0394 25.5074 63.0373 26.693 61.7881 26.693H58.6667C58.6667 26.693 58.6667 19.9999 52 19.9999C45.3333 19.9999 45.3333 26.6666 45.3333 26.6666H34C34 26.6666 34 19.9999 27.3333 19.9999C20.6667 19.9999 20.6667 26.6666 20.6667 26.6666C20.6667 26.6666 20.6667 19.9999 14 19.9999C7.33333 19.9999 7.33333 26.6666 7.33333 26.6666L2.63581 26.692C1.19627 26.692 0 25.3241 0 23.6338V17.9098C0 16.9068 0.167203 16.3278 0.813753 15.3023L9.35369 1.78305C10.255 0.353366 11.2877 0.0263759 13.4279 0.0263759H28.3423H30.5165H31.7396ZM13.2561 3.93857C13.4512 3.62633 13.3563 3.21504 13.044 3.01993C12.7318 2.82482 12.3205 2.91977 12.1254 3.23202L4.35322 15.6701C4.15811 15.9823 4.25306 16.3936 4.5653 16.5887C4.87754 16.7838 5.28884 16.6889 5.48395 16.3766L13.2561 3.93857Z"
            fill="#2595E8"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default VehicleSvg;