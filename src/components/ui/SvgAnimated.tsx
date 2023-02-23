import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { svgAnimation } from '@/utils';

const SvgAnimated = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.svg
      width="372"
      height="20"
      viewBox="0 0 372 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-72 h-16"
      ref={ref}>
      <g id="signature_group_1">
        <motion.path
          id="vector_1"
          d="M370 25C309.98 37.0041 249.975 48.9769 190.667 64.2222C142.037 76.7226 93.0277 89.782 47.5555 111.5C32.5804 118.652 13.9056 126.829 3.33333 140.444C2.20728 141.895 1.56473 143.342 3.88888 142.778C17.3104 139.518 30.5067 131.554 42.6111 125.278C62.3006 115.068 82.1374 104.624 100.556 92.2222C116.218 81.6758 133.682 68.4131 142.333 51.1111C144.519 46.7396 145.669 28.3435 136.389 30.1111C122.141 32.8251 119.316 59.0744 117.889 69.6667C115.827 84.9766 123.898 89.4581 138.389 91.3333C148.799 92.6805 159.52 92 170 92"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          animate={svgAnimation(inView).animate}
          transition={svgAnimation(inView).transition}
        />
        <motion.path
          id="vector_2"
          d="M158 25C158 39.6168 164.384 54.9286 169.889 68.1667C173.15 76.0085 175.758 84.9104 180 92.3333C180.053 92.4267 187.965 79.6606 190.667 82.1111C193.364 84.5573 195.895 92 200 92"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          animate={svgAnimation(inView).animate}
          transition={svgAnimation(inView).transition}
        />
        <motion.path
          id="vector_3"
          d="M201 75C201 78.6729 202.794 82.1398 204 85.5556C205.495 89.7906 205.789 83.3798 206.444 81.7778C210.659 71.4745 213.348 82.4734 215.556 86.8889C216.985 89.7469 220.59 76 223.5 76C229.392 76 227.825 89 235 89"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          animate={svgAnimation(inView).animate}
          transition={svgAnimation(inView).transition}
        />
        <motion.path
          id="vector_4"
          d="M238 74C242.18 74 251.183 66.0908 243 67C236.284 67.7462 244.981 80.0656 246.5 81.3889C251.587 85.8192 257.836 85.5409 264 84"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          animate={svgAnimation(inView).animate}
          transition={svgAnimation(inView).transition}
        />
        <motion.path
          id="vector_5"
          d="M275 66C273.252 66 270 65.0942 270 67.5C270 69.4348 269.88 71.8239 272 72.7778C275.477 74.3422 277.503 70.8414 277.889 67.9445C279.472 56.0678 276.051 45.9126 269.889 36C265.154 28.3834 260.232 20.9289 254.667 13.8889C251.854 10.3314 248.523 4.57605 244.722 1.94445C242.397 0.334413 245.089 7.65552 246 10.3333C250.091 22.3578 256.198 34.3134 263.889 44.4445C279.943 65.5934 300.42 72.9181 326.556 73.5556C335.74 73.7796 348.981 74.0192 356 67"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          animate={svgAnimation(inView).animate}
          transition={svgAnimation(inView).transition}
        />
      </g>
    </motion.svg>
  );
};

export default SvgAnimated;
