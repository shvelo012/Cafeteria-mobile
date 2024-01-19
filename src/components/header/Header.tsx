import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { HeaderProps } from './Header.props';
import { styles } from './Header.styles';
import { Row } from '../row/Row';


const Header: React.FC<HeaderProps> = ({ title, leftIcon, onLeftIconPress }) => {
  return (
    <Row alignItems="center" justifyContent="space-between">
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
          {leftIcon}
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
    </View>
    </Row>
  );
};

export default Header;
