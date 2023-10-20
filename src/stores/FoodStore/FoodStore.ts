import { makeAutoObservable, observable } from 'mobx';
import { FoodItemType } from '../../types.ts/FoodItemType';

export class FoodStore {
  private _foodItem: FoodItemType[] = [];

  constructor() {
    makeAutoObservable(this, {}, { name: 'FoodStore', autoBind: true });
  }

  get foodItems() {
    return this._foodItem;
  }

  addFoodItems(newFoodItem: FoodItemType[] = []) {
    this._foodItem = [...newFoodItem];
  }

  changeQuantity(quantity: number, id: number) {
    this._foodItem = this._foodItem.map(item =>
      item.ID === id ? { ...item, quantity } : item
    );
  }

  reset() {
    this._foodItem = [];
  }
}
