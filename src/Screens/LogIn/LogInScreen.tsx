import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { useQuery } from '@tanstack/react-query';
import { styles } from './LoginScreen.styles';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { Button } from '../../components/Button/Button';
import { DeviceApi } from '../../API/API';
const getCredentialsAPI = `http://${DeviceApi}:4000/admin/getcredentials`;

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
  const { data, error, isLoading } = useQuery({ queryKey: ['credentials'], queryFn: fetchDataFunction });
  console.log(data);
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
        <View style={styles.screenRoot}>
          <Header leftIcon={<ArrowLeft />} onLeftIconPress={() => navigate(Screens.HomeScreenName)} />
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
            <Button
              text='Log In'
              onPress={handleLogin}
              disabled={!!error || isLoading} />
          </View>
        </View>
      }
    </>
  );
};



export default LoginScreen;
