import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MainContainer from './src/MainContainer';
import { QueryClientProvider } from '@tanstack/react-query';
import getCredentialsQueryClient from './src/queries/credentialsQuery';

const App: React.FC = () => {

  return (
    <QueryClientProvider client={getCredentialsQueryClient}>
      <MainContainer />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
