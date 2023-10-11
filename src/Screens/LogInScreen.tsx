import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { navigate } from '../Navigation/utils';
import { Screens } from './screenConstants';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate(Screens.HomeAdminScreenName);
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <>
      <TouchableHighlight style={styles.backButton} onPress={() => navigate(Screens.HomeScreenName)}>
        <Text>back</Text>
      </TouchableHighlight>
      <View style={styles.container}>

        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  }

});

export default LoginScreen;
