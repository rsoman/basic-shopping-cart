import { DiscountUtils } from "../utils/discount-util";
import { Item } from "./item";

describe('Item', () => {
  describe('calculatePrice', () => {
    it('should calculate correct price with no discount', () => {
      const item = new Item('Apple', 0.35, DiscountUtils.noDiscount);
      expect(item.calculatePrice(2)).toBe(0.70);
    });

    it('should calculate correct price with BOGO discount', () => {
      const item = new Item('Melon', 0.50, DiscountUtils.buyOneGetOneFree);
      expect(item.calculatePrice(3)).toBe(1.00);
    });

    it('should calculate correct price with three for two discount', () => {
      const item = new Item('Lime', 0.15, DiscountUtils.threeForTwo);
      expect(item.calculatePrice(5)).toBe(0.60);
    });

    it('should throw error for negative count', () => {
      const item = new Item('Apple', 0.35, DiscountUtils.noDiscount);
      expect(() => item.calculatePrice(-1)).toThrow();
    });

    it('should return 0 for zero count', () => {
      const item = new Item('Apple', 0.35, DiscountUtils.noDiscount);
      expect(item.calculatePrice(0)).toBe(0);
    });
  });
}); 