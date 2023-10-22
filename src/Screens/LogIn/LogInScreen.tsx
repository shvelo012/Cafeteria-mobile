import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { useMutation, useQuery } from '@tanstack/react-query';
import { styles } from './LoginScreen.styles';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { Button } from '../../components/Button/Button';
import { DeviceApi } from '../../API/API';
import axios from 'axios';
const getCredentialsAPI = `http://${DeviceApi}:4000/admin/getcredentials`;
const openStoreAPI = `http://${DeviceApi}:4000/admin/setIsOpen`;

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openCafeteriaMutation = useMutation({
    mutationFn: (setIsOpen: { isOpen: number }) => {
      return axios.post(openStoreAPI, setIsOpen)
    },
  });

  const handleLogin = () => {
    // if (username === data.username && password === data.password) {
    navigate(Screens.HomeAdminScreenName);
    openCafeteriaMutation.mutate({ isOpen: 1 });
    // }
    // return;
  };

  return (
    <>
      {isLoading ?
        <View style={styles.loader}>
          <Text>Loading...</Text>
          <ActivityIndicator />
        </View>
        :
        <KeyboardAvoidingView>
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
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Button
                text='Log In'
                onPress={() => handleLogin()}
                disabled={!!error || isLoading || openCafeteriaMutation.isLoading} />
            </View>
          </View>
        </KeyboardAvoidingView>
      }
    </>
  );
};



export default LoginScreen;
