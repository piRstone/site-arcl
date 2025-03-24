import {memo} from 'react';
import {IconProps} from './types';

const Automobile = ({size = 48}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <path
        fill="#dd2e44"
        d="M13 32h20s3 0 3-4c0-2 0-6-1-7s-8-7-11-7h-6c-3 0-10 7-10 7l-4 1s-3 1-3 3v3s-1 .338-1 1.957C0 32 2 32 2 32z"
      ></path>
      <path
        fill="#bbddf5"
        d="M20 16h-2c-2 0-8 6-8 6s4.997-.263 10-.519zm10 3c-1-1-5-3-7-3h-1v5.379c4.011-.204 7.582-.379 8-.379c1 0 1-1 0-2"
      ></path>
      <circle cx={10} cy={31} r={4} fill="#292f33"></circle>
      <circle cx={10} cy={31} r={2} fill="#ccd6dd"></circle>
      <circle cx={27} cy={31} r={4} fill="#292f33"></circle>
      <circle cx={27} cy={31} r={2} fill="#ccd6dd"></circle>
    </svg>
  );
};

export default memo(Automobile);
