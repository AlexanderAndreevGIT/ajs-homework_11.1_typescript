/* eslint-disable no-underscore-dangle */
import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sumWithoutDiscount(): number {
    let sum = 0;
    this._items.forEach((item) => {
      sum += item.price;
    });
    return sum;
  }

  sumWithDiscount(discount: number): number {
    return this.sumWithoutDiscount() * (1 - discount / 100);
  }

  deleteItem(id: number): void {
    let count = 0;
    this._items.forEach((item) => {
      if (item.id === id) {
        this._items.splice(count, 1);
      }
      count += 1;
    });
  }
}
