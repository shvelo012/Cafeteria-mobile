import React, { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LogInScreen';
import HomeAdminScreen from './Screens/HomeAdminScreen';
import { View } from 'react-native';
enum Screen {
  HOME,
  LOGIN,
  ADMIN_HOME,
}

const MainContainer: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen />;
      case Screen.LOGIN:
        return <LoginScreen />;
      case Screen.ADMIN_HOME:
        return <HomeAdminScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View>
      {renderScreen()}
      {/* You can add navigation or buttons to switch between screens */}
    </View>
  );
};

export default MainContainer;
