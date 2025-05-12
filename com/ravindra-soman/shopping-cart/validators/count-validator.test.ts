import { CountValidator } from "./count-validator";

describe('CountValidator', () => {
    it('should validate valid count', () => {
      expect(() => new CountValidator().validate(5)).not.toThrow();
    });

    it('should throw error for negative count', () => {
      expect(() => new CountValidator().validate(-1)).toThrow('Item count cannot be negative');
    });

    it('should throw error for non-integer count', () => {
      expect(() => new CountValidator().validate(1.5)).toThrow('Item count must be an integer');
    });

    it('should validate zero count', () => {
      expect(() => new CountValidator().validate(0)).not.toThrow();
    });

  });