import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeAdminScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Admin!</Text>
      <Text style={styles.subtitle}>This is the admin home screen.</Text>
    </View>
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
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeAdminScreen;
