import React from 'react';
import { View } from 'react-native';
import { navigate } from '../../Navigation/utils';
import { Screens } from '../screenConstants';
import { ArrowLeft } from '../../icons';
import Header from '../../components/header/Header';
import { styles } from './HomeAdminScreen.styles';

const HomeAdminScreen: React.FC = () => {
  return (
    <View style={styles.screenRoot}>
      <Header leftIcon={<ArrowLeft />} onLeftIconPress={() => navigate(Screens.LoginScreenName)} />
    </View>
  );
};

export default HomeAdminScreen;
