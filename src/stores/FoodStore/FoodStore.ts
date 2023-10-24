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
    const itemIndex = this._foodItem.findIndex(item => item.ID === id);
    if (itemIndex !== -1) {
      this._foodItem[itemIndex].Quantity = quantity;
    }
  }


  reset() {
    this._foodItem = [];
  }
}
