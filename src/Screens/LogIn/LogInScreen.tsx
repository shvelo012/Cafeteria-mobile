import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { useMutation } from '@tanstack/react-query';
import { styles } from './LoginScreen.styles';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { Button } from '../../components/Button/Button';
import { DeviceApi } from '../../API/API';
import axios from 'axios';
import { useCredentialsQuery } from './Queries/getCredentialsQuery';
const openStoreAPI = `http://${DeviceApi}:4000/admin/setIsOpen`;

const LoginScreen: React.FC = () => {
  const { credentialsData, credentialsError, credentialsIsLoading } = useCredentialsQuery();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openCafeteriaMutation = useMutation({
    mutationFn: (setIsOpen: { IsOpen: number }) => {
      return axios.post(openStoreAPI, setIsOpen)
    },
  });

  const handleLogin = () => {
    // if (username === data.username && password === data.password) {
    navigate(Screens.HomeAdminScreenName);
    openCafeteriaMutation.mutate({ IsOpen: 1 });
    // }
    // return;
  };

  return (
    <>
      {credentialsIsLoading ?
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
                disabled={!!credentialsError || credentialsIsLoading || openCafeteriaMutation.isLoading} />
            </View>
          </View>
        </KeyboardAvoidingView>
      }
    </>
  );
};



export default LoginScreen;
