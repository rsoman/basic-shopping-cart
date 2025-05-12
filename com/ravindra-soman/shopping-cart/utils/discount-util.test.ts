import { DiscountUtils } from "./discount-util";

describe('Discount Strategies', () => {
  describe('noDiscount', () => {
    it('should calculate correct price for valid input', () => {
      expect(DiscountUtils.noDiscount.calculateDiscountedPrice(2, 0.35)).toBe(0.70);
    });

    it('should return 0 for zero count', () => {
      expect(DiscountUtils.noDiscount.calculateDiscountedPrice(0, 0.35)).toBe(0);
    });
  });

  describe('buyOneGetOneFree', () => {
    it('should calculate correct price for even count', () => {
      expect(DiscountUtils.buyOneGetOneFree.calculateDiscountedPrice(4, 0.50)).toBe(1.00);
    });

    it('should calculate correct price for odd count', () => {
      expect(DiscountUtils.buyOneGetOneFree.calculateDiscountedPrice(3, 0.50)).toBe(1.00);
    });
  });

  describe('threeForTwo', () => {
    it('should calculate correct price for count divisible by 3', () => {
      expect(DiscountUtils.threeForTwo.calculateDiscountedPrice(6, 0.15)).toBe(0.60);
    });

    it('should calculate correct price for count not divisible by 3', () => {
      expect(DiscountUtils.threeForTwo.calculateDiscountedPrice(5, 0.15)).toBe(0.60);
    });
  });
}); 