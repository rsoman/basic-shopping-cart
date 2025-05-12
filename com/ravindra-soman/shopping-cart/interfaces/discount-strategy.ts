export interface DiscountStrategy {
    calculateDiscountedPrice: (count: number, price: number) => number;
}