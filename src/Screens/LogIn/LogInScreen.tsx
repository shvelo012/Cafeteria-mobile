import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { useQuery } from '@tanstack/react-query';
import { styles } from './LoginScreen.styles';

const getCredentialsAPI = 'http://192.168.0.113:4000/admin/getcredentials';

const fetchDataFunction = async () => {
  try {
    const response = await fetch(getCredentialsAPI);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
};




const LoginScreen: React.FC = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchDataFunction })

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // console.log(username + " " + password);
    // console.log(username === data.username && password === data.password);
    // if (username === data.username && password === data.password) {
    navigate(Screens.HomeAdminScreenName);
    // }
    // return;
    // console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <>
      {isLoading ?
        <View style={styles.loader}>
          <Text>Loading...</Text>
          <ActivityIndicator />
        </View>
        :
        <>
          <TouchableHighlight style={styles.backButton} onPress={() => navigate(Screens.HomeScreenName)}>
            <View>
              <Text>back</Text>
              <Text onPress={() => console.log(data)}>kkkk</Text>
            </View>
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
      }
    </>
  );
};



export default LoginScreen;
