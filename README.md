# Shopping Cart Application

A shopping cart application that implements various discount strategies and price calculations.

## Features
- Calculate total price for shopping baskets
- Multiple discount strategies:
  - No discount (regular pricing)
  - Buy One Get One Free (BOGO)
  - Three for Two (3-for-2)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd basic-shopping-cart
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Basic Usage

```typescript
import { BasketCalculator } from "./com/ravindra-soman/shopping-cart/controllers/basket-calculator";

const calculator = new BasketCalculator();
const basket = ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"];
const total = calculator.calculateTotalPrice(basket);
console.log(`Total Price: £${total.toFixed(2)}`);
```

### Available Items and Discounts

| Item   | Price | Discount Strategy |
|--------|-------|------------------|
| Apple  | £0.35 | No discount      |
| Banana | £0.20 | No discount      |
| Melon  | £0.50 | Buy One Get One Free |
| Lime   | £0.15 | Three for Two    |

### Discount Rules

1. **No Discount**
   - Regular pricing: price × quantity

2. **Buy One Get One Free (BOGO)**
   - Every second item is free

3. **Three for Two**
   - Every third item is free

## Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

### Running Application
```bash

npx ts-node index.ts
```

## Validation Rules

- Item names must be non-empty strings
- Prices must be positive numbers with at most 2 decimal places
- Quantities must be positive integers
- Unknown items are ignored with a warning

## Error Handling

The application handles various error cases:
- Invalid item names
- Unknown items
- Invalid quantities
- Invalid prices

## License
This project is licensed under the MIT License.

## Author
Ravindra Soman 