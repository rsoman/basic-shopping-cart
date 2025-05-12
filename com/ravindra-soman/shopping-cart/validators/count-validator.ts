import { Validator } from "../interfaces/validator";

/**
 * Validates the count of items in the basket.
 */
export class CountValidator implements Validator {
    validate(count: number): void {
        if (count < 0) {
            throw new Error('Item count cannot be negative');
        }
        if (!Number.isInteger(count)) {
            throw new Error('Item count must be an integer');
        }
    }
}