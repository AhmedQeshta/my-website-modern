import { FC } from 'react';

export const withGuard = (Component: FC<any>, dataName: string) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (props[dataName].length <= 0) {
      return null;
    }

    return <Component {...props} />;
  };
};
