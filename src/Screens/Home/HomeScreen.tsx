import React from 'react';
import { View, Text } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { styles } from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
  return (
    <>
      {/* header */}
      <View>
        <Text style={styles.logInButton} onPress={() => navigate(Screens.LoginScreenName)}> Log In  </Text>
      </View>
      {/* Home Screen */}
      <View>

      </View>
    </>
  );
};

export default HomeScreen;
