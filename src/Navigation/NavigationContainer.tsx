import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import React from 'react';

import { navigationRef } from './utils';

export const NavigationContainer: React.FC<React.PropsWithChildren> = props => {
  const { children } = props;

  return <RNNavigationContainer ref={navigationRef}>{children}</RNNavigationContainer>;
};
