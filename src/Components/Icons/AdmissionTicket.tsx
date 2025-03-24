import { memo } from "react";
import {IconProps} from './types';

const AdmissionTicket = ({size = 48}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <path
        fill="#ea596e"
        d="M26.751 8.007a4.67 4.67 0 0 0 5.046 1.032l3.613 3.611c.737.74.738 1.938-.004 2.68L15.319 35.405a1.9 1.9 0 0 1-2.681 0l-3.606-3.612A4.69 4.69 0 0 0 8 26.746a4.68 4.68 0 0 0-5.047-1.032l-2.359-2.36a1.893 1.893 0 0 1 0-2.68L20.678.596a1.89 1.89 0 0 1 2.679.002l2.361 2.361a4.68 4.68 0 0 0 1.033 5.048"
      ></path>
      <path
        fill="#be1931"
        d="m5.42 18.527l-2.149 2.148a1.9 1.9 0 0 0-.003 2.68l.542.541a5.67 5.67 0 0 1 5.482 1.468a5.67 5.67 0 0 1 1.467 5.481l1.878 1.883a1.9 1.9 0 0 0 2.682-.002l2.189-2.187zm13.521 10.58l10.158-10.152L17.008 6.943L6.854 17.095zm1.99-13.993c2.245 2.228 2.745 5.356 1.121 6.989c-1.627 1.635-4.762 1.151-7.001-1.075c-2.239-2.228-2.738-5.358-1.114-6.991c1.625-1.63 4.755-1.15 6.994 1.077m11.8-2.464l-1.881-1.881a5.67 5.67 0 0 1-5.483-1.468a5.67 5.67 0 0 1-1.47-5.484l-.541-.546a1.9 1.9 0 0 0-2.678.003L18.442 5.51l12.092 12.011l2.196-2.195c.74-.737.74-1.936.001-2.676"
      ></path>
    </svg>
  );
};

export default memo(AdmissionTicket);
