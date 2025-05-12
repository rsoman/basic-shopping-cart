import { BasketCalculator } from "./com/ravindra-soman/shopping-cart/controllers/basket-calculator";

const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"];
const calculator = new BasketCalculator();

const total = calculator.calculateTotalPrice(basket);
console.log(`Total Price: £${total.toFixed(2)}`);