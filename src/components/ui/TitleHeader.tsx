import React, { FC } from 'react';
import { TitleHeaderProps } from '@/interfaces';

const TitleHeader: FC<TitleHeaderProps> = ({ title, classes, ...restProps }) => {
  return (
    <h3
      className={`absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ${classes}`}
      {...restProps}>
      {title}
    </h3>
  );
};

export default TitleHeader;
