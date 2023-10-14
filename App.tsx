import React from 'react';
import { StyleSheet } from 'react-native';
import MainContainer from './src/MainContainer';
import { QueryClientProvider } from '@tanstack/react-query';
import getData from './src/queries/getData';

const App: React.FC = () => {

  return (
    <QueryClientProvider client={getData}>
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
