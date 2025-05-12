import { ValidatedDiscountStrategy } from "../decorators/validated-discount-strategy";
import { BasketCalculator } from "./basket-calculator";

describe('BasketCalculator', () => {
  let calculator: BasketCalculator;

  beforeEach(() => {
    calculator = new BasketCalculator();
  });

  describe('calculateTotalPrice', () => {
    it('should return 0 for empty basket', () => {
      const basket: string[] = [];
      expect(calculator.calculateTotalPrice(basket)).toBe(0);
    });

    it('should calculate correct total for valid items', () => {
      const basket = ['Apple', 'Apple', 'Banana'];
      expect(calculator.calculateTotalPrice(basket)).toBe(0.90); // 2 * 0.35 + 1 * 0.20
    });

    it('should ignore unknown items', () => {
      const basket = ['Apple', 'UnknownItem'];
      expect(calculator.calculateTotalPrice(basket)).toBe(0.35);
    });
  });

  describe('updateDiscountStrategy', () => {
    it('should update discount strategy for valid item', () => {
      const newStrategy: ValidatedDiscountStrategy = new ValidatedDiscountStrategy({
        calculateDiscountedPrice: (count, price) => count * price * 0.5
      });
      calculator.updateDiscountStrategy('Apple', newStrategy);
      const basket = ['Apple', 'Apple'];
      expect(calculator.calculateTotalPrice(basket)).toBe(0.35); // 2 * 0.35 * 0.5
    });

    it('should not update discount strategy for unknown item', () => {
      const newStrategy: ValidatedDiscountStrategy = new ValidatedDiscountStrategy({
        calculateDiscountedPrice: (count, price) => count * price * 0.5
      });
      calculator.updateDiscountStrategy('UnknownItem', newStrategy);
      const basket = ['Apple', 'Apple'];
      expect(calculator.calculateTotalPrice(basket)).toBe(0.70); // Original price
    });
  });
}); 