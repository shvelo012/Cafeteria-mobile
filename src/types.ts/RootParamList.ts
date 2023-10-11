import { Screens } from "../Screens/screenConstants";


// Create a type for the entire stack navigation
export type RootParamList = {
  [Screens.HomeScreenName]: undefined;
  [Screens.LoginScreenName]: undefined;
  [Screens.HomeAdminScreenName]: undefined;
};

export type ScreensType = keyof RootParamList;
