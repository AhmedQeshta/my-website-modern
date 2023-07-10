import React, { FC } from 'react';
import { TitleHeaderProps } from '@/interfaces';

const TitleHeader: FC<TitleHeaderProps> = ({ title, classes, ...restProps }) => {
  return (
    <h2
      className={`absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ${classes}`}
      {...restProps}>
      {title}
    </h2>
  );
};

export default TitleHeader;
