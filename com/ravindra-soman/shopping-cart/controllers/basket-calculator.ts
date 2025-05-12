import { Item } from "../models/item";
import { ValidatedDiscountStrategy } from "../decorators/validated-discount-strategy";
import { DiscountUtils } from "../utils/discount-util";

/**
 * This class calculates the total price of items in a shopping basket.
 */
export class BasketCalculator {
  private items: Map<string, Item>;

  /**
   * Initializes a new BasketCalculator instance with predefined items, their price and their discount strategies.
   * As the solution evolves, this data can be read from the database using an API call or from configuration file.
   */
  constructor() {
    this.items = new Map([
      ["Apple", new Item("Apple", 0.35, DiscountUtils.noDiscount)],
      ["Banana", new Item("Banana", 0.20, DiscountUtils.noDiscount)],
      ["Melon", new Item("Melon", 0.50, DiscountUtils.buyOneGetOneFree)],
      ["Lime", new Item("Lime", 0.15, DiscountUtils.threeForTwo)]
    ]);
  }

  /**
   * Calculates the total price of all items in the shopping basket.
   * If any unknowen item is found, then it will be ignored. 
   * 
   * @param basket - Array of item names
   * @returns The total price of all items.
   * 
   */
  calculateTotalPrice(basket: string[]): number {
    // validate basket
    if (!Array.isArray(basket)) {
      throw new Error('Basket must be an array');
    }
    
    if (basket.some(item => !item || typeof item !== 'string')) {
      throw new Error('Basket items must be non-empty strings');
    }

    // This map holds occurrences of each item. 
    // For every item in the basket, we increment the count.
    const itemCounts = new Map<string, number>();
    for (const itemName of basket) {
      itemCounts.set(itemName, (itemCounts.get(itemName) || 0) + 1);
    }

    // for every item in the map, we calculate the price using the discount strategy.
    // if the item is not found in the records, we ignore it.
    let total = 0;
    for (const [itemName, count] of itemCounts.entries()) {
      const item = this.items.get(itemName);
      if (item) {
        total += item.calculatePrice(count);
      } else {
        console.warn(`WARNING:Item ${itemName} is not found in the records. It will be ignored.`);
      }
    }
    return Number(total.toFixed(2));
  }

  /**
   * Updates the discount strategy for a specific item.
   * 
   * @param itemName - The name of the item to update
   * @param newStrategy - The new discount strategy to apply
   * 
   * This method is actually not called anywhere.
   * It is defined to show that we can update the discount strategy for an item.
   * Test cases is added to test this 
   */
  updateDiscountStrategy(itemName: string, newStrategy: ValidatedDiscountStrategy): void {
    const item = this.items.get(itemName);
    if (item) {
      item.discountStrategy = newStrategy;
    }
  }
}
