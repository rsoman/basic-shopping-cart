import { ValidatedDiscountStrategy } from "../decorators/validated-discount-strategy";

/**
 * Model class for an item in the cart
 * Each item has a name, base price, and a discount strategy.
 */
export class Item {
  constructor(
    public name: string,
    public price: number,
    public discountStrategy: ValidatedDiscountStrategy
  ) {}

  /**
   * Calculates the total price for a given quantity of this item by calling strategy method.
   * 
   */
  calculatePrice(count: number): number {
    return this.discountStrategy.calculateDiscountedPrice(count, this.price);
  }
}