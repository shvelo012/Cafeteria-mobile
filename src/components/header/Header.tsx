import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { HeaderProps } from './Header.props';
import { styles } from './Header.styles';
import { Row } from '../row/Row';
import { Spacer } from '../Spacer';

const Header: React.FC<HeaderProps> = ({ title, leftIcon, onLeftIconPress }) => {
  return (
    <Row alignItems="center" justifyContent="space-between">
      <Spacer px={3} py={2}>
        <TouchableOpacity onPress={onLeftIconPress} style={styles.leftIcon}>
          {leftIcon}
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </Spacer>
    </Row>
  );
};

export default Header;
