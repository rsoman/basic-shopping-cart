import { ValidatedDiscountStrategy } from "../decorators/validated-discount-strategy";

/**
 * Utility class that contains all discount strategies for items.
 */
export class DiscountUtils {
    /**
     * No discount strategy - charges full price for each item.
     * 
     */
    static noDiscount: ValidatedDiscountStrategy = new ValidatedDiscountStrategy({
        calculateDiscountedPrice: (count, price) => count * price
    });

    /**
     * Buy One Get One Free strategy.
     * Every second item is free. 
     * 
     */
    static buyOneGetOneFree: ValidatedDiscountStrategy = new ValidatedDiscountStrategy({
        calculateDiscountedPrice: (count, price) => price * Math.ceil(count / 2)
    });

    /**
     * Three for Two strategy.
     * Every third item is free.
     * 
     */
    static threeForTwo: ValidatedDiscountStrategy = new ValidatedDiscountStrategy({
        calculateDiscountedPrice: (count, price) =>
            price * Math.floor(count / 3) * 2 + (count % 3) * price
    });
} 