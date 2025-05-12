import { BasketCalculator } from "./com/ravindra-soman/shopping-cart/controllers/basket-calculator";

describe('Shopping Cart Integration', () => {
  let calculator: BasketCalculator;

  beforeEach(() => {
    calculator = new BasketCalculator();
  });

  it('should calculate correct total for valid basket', () => {
    const basket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
    expect(calculator.calculateTotalPrice(basket)).toBe(1.70); // 2 * 0.35 + 1 * 0.20 + 2 * 0.50 + 3 * 0.15
  });

  it('should handle basket with unknown items', () => {
    const basket = ['Apple', 'UnknownItem', 'Banana'];
    expect(calculator.calculateTotalPrice(basket)).toBe(0.55); // 1 * 0.35 + 1 * 0.20
  });

  it('should handle empty basket', () => {
    const basket: string[] = [];
    expect(calculator.calculateTotalPrice(basket)).toBe(0);
  });

  it('should handle large quantities', () => {
    const basket = Array(1000).fill('Apple');
    expect(() => calculator.calculateTotalPrice(basket)).not.toThrow();
  });

  it('should handle mixed discount strategies', () => {
    const basket = [
      'Apple', 'Apple', // No discount
      'Melon', 'Melon', 'Melon', // BOGO
      'Lime', 'Lime', 'Lime', 'Lime' // Three for two
    ];
    expect(calculator.calculateTotalPrice(basket)).toBe(2.15); // 2 * 0.35 + 2 * 0.50 + 3 * 0.15
  });
}); 