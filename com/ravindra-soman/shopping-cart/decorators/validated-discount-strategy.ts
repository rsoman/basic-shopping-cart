import { DiscountStrategy } from "../interfaces/discount-strategy";
import { CountValidator } from "../validators/count-validator";
import { PriceValidator } from "../validators/price-validator";

/**
 * This is a simple decorator pattern implementation.
 * it is used to make sure that validation is called before calling the discount strategy.
 */
export class ValidatedDiscountStrategy implements DiscountStrategy {
    /**
     * Creates a new validated discount strategy decorator.
     */
    constructor(private strategy: DiscountStrategy) {}

    /**
     * Calculates the discounted price after validating the inputs.
     * 
     * @param count - The quantity of items
     * @param price - The base price per item
     * @returns The calculated discounted price
     */
    calculateDiscountedPrice(count: number, price: number): number {
        // Validate inputs before calculation
        new CountValidator().validate(count);
        new PriceValidator().validate(price);
        
        // Calculate price using the wrapped strategy
        return this.strategy.calculateDiscountedPrice(count, price);
    }
}