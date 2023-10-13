import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { HeaderProps } from './Header.props';
import { styles } from './Header.styles';
import { Row } from '../row/Row';

const Header: React.FC<HeaderProps> = ({ title, leftIcon, onLeftIconPress }) => {
  return (
    <Row style={styles.headerContainer}>
      <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
        {leftIcon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </Row>
  );
};



export default Header;
