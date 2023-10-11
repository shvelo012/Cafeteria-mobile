import { createNavigationContainerRef } from '@react-navigation/native';

import { RootParamList, ScreensType } from '../types.ts/RootParamList';

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (name: ScreensType, params?: RootParamList[ScreensType]) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate({ key: name, name, params });
  }
};