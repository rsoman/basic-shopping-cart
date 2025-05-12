import { PriceValidator } from "./price-validator";

describe('PriceValidator', () => {
    it('should validate valid price', () => {
      expect(() => new PriceValidator().validate(0.35)).not.toThrow();
    });

    it('should throw error for negative price', () => {
      expect(() => new PriceValidator().validate(-0.35)).toThrow('Price must be greater than zero');
    });

    it('should throw error for zero price', () => {
      expect(() => new PriceValidator().validate(0)).toThrow('Price must be greater than zero');
    });
  });