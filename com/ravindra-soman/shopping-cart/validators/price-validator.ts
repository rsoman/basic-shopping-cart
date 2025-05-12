import { Validator } from "../interfaces/validator";

/**
 * Validates the price of an item.
 */
export class PriceValidator implements Validator {
    validate(price: number): void {
        if (price <= 0) {
            throw new Error('Price must be greater than zero');
        }
    }
}