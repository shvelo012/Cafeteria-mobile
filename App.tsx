import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import MainContainer from './src/MainContainer';
import { QueryClientProvider } from '@tanstack/react-query';
import getData from './src/queries/getData';
import { FoodItemsStoreProvider } from './src/stores/FoodStore/FoodStore.Provider';
import { FoodStore } from './src/stores/FoodStore/FoodStore';



const App: React.FC = () => {

  const foodItemStore = useMemo(() => {
    return new FoodStore();
  }, []);

  return (
    <FoodItemsStoreProvider value={foodItemStore}>
      <QueryClientProvider client={getData}>
        <MainContainer />
      </QueryClientProvider>
    </FoodItemsStoreProvider>
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
