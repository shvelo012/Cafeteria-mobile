import { createContext, useContext } from 'react';

import type { FoodStore } from './FoodStore';

export const FoodItemsStoreContext = createContext<null | FoodStore>(null);
export const FoodItemsStoreProvider = FoodItemsStoreContext.Provider;

export function useFoodStore() {
  const foodItemStore = useContext(FoodItemsStoreContext);

  if (!foodItemStore) {
    throw new Error('foodItemStore store is not provided');
  }

  return foodItemStore;
}
