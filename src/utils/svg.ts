import { svgMotionProps } from '@/interfaces';

export const svgAnimation = (inView: boolean): svgMotionProps => {
  return {
    animate: { pathLength: inView ? 1 : 0 },
    transition: { duration: 2 },
  };
};
