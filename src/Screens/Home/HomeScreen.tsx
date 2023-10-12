import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';


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

// Define styles using StyleSheet
const styles = StyleSheet.create({
  logInButton: {
    alignSelf: 'flex-end',
    right: 20,
    top: 60,
    color: 'blue',
    fontSize: 15,
    textDecorationLine: 'underline',
  }
});

export default HomeScreen;
