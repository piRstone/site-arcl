import {memo} from 'react';
import {IconProps} from './types';

const HouseWithGarden = ({size = 48}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <path
        fill="#5c913b"
        d="M36 33.5a1.5 1.5 0 0 1-1.5 1.5h-33a1.5 1.5 0 0 1 0-3h33a1.5 1.5 0 0 1 1.5 1.5"
      ></path>
      <path
        fill="#a0041e"
        d="M12.344 14.702h-2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5"
      ></path>
      <path
        fill="#ffcc4d"
        d="M5.942 32c-.137-4.657-.506-8-.942-8s-.804 3.343-.941 8z"
      ></path>
      <path
        fill="#77b255"
        d="M10 18.731C10 24.306 7.762 26 5 26s-5-1.694-5-7.269C0 13.154 4 5 5 5s5 8.154 5 13.731"
      ></path>
      <path fill="#ffe8b6" d="M8 16L21 3l13 13v16H8z"></path>
      <path fill="#ffcc4d" d="M21 16h1v16h-1z"></path>
      <path
        fill="#66757f"
        d="M34 17a1 1 0 0 1-.707-.293L21 4.414L8.707 16.707a.999.999 0 1 1-1.414-1.414l13-13a1 1 0 0 1 1.414 0l13 13A.999.999 0 0 1 34 17"
      ></path>
      <path
        fill="#66757f"
        d="M21 17a.999.999 0 0 1-.707-1.707l6.5-6.5a.999.999 0 1 1 1.414 1.414l-6.5 6.5A1 1 0 0 1 21 17"
      ></path>
      <path fill="#c1694f" d="M13 26h4v6h-4z"></path>
      <path fill="#55acee" d="M13 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
      <path
        fill="#77b255"
        d="M10.625 29.991c0 1.613-.858 2.103-1.917 2.103c-1.058 0-1.917-.49-1.917-2.103s1.533-3.973 1.917-3.973s1.917 2.359 1.917 3.973m25.25 0c0 1.613-.858 2.103-1.917 2.103c-1.058 0-1.917-.49-1.917-2.103s1.533-3.973 1.917-3.973s1.917 2.359 1.917 3.973"
      ></path>
    </svg>
  );
};
export default memo(HouseWithGarden);
