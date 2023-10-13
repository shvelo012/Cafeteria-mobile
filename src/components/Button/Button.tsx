import React, { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View, Text } from 'react-native';

import { Row } from '../row/Row';
import { colors } from '../colors';

import { Spacer } from '../Spacer';

import { ButtonProps } from './Button.props';
import { ButtonStyles } from './Button.styles';

export const Button: React.FC<ButtonProps> = props => {
  const { adornment, text, disabled, loading, style: additionalStyle, ...rest } = props;

  const [isPressed, setIsPressed] = useState(false);
  const styles = ButtonStyles({ ...props, isPressed });

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.root, additionalStyle]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled || loading}
      {...rest}
    >
      <Row alignItems="center" justifyContent="center">
        {!loading && Boolean(adornment) && adornment}
        {loading && (
          <Spacer mr={1}>
            <ActivityIndicator animating size="small" color={colors.congoPink} />
          </Spacer>
        )}
        <View style={styles.text}>
          <Text>
            {text}
          </Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};
