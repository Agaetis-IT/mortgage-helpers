# mortgage-helpers

A suite of JavaScript functions to compute mortgage values, such as monthly payments or maximum borrowing capacity. I couldn't find a modern and pure JS library published on npm to do that, so here it is! It may need some more functions though, feel free to contribute!

## Get started

`yarn add mortgage-helpers` or `npm i mortgage-helpers`

## Usage

```js
import mortgageHelpers from "mortgage-helpers";

mortgageHelpers.getMonthlyPayments(10000, 1, 24); // should return 421.02
```

You can also directly import functions like this: `import {getMonthlyPayments} from 'mortgage-helpers'`

## API

### getMonthlyPayments

This function will give you the fixed monthly amount to pay for a mortgage, based on its amount, interest rate and number of months.

```js
getMonthlyPayments: (
  loanAmount: number,
  interestRate: number,
  months: number
) => number;
```

If one param is missing or is not a valid number, it will throw an error.

### getMaximumBorrowingCapacity

This function will give you the maximum amount you can borrow, based on available revenue (monthly with deduced charges), interest rate, number of months and max debt ratio (a percentage which can either be a float, ie: .36, or a number like 36, which means either way 36%).

```js
getMaximumBorrowingCapacity: (
  availableRevenue: number,
  interestRate: number,
  months: number
  maximumDebtRatio: number
) => {
  loanAmount: number,
  monthlyPayment: number,
  interestsAmount: number,
};
```

If one param is missing or is not a valid number, it will throw an error.

## Contributing

Any new mortgage-related function is welcome! Feel free to open an issue, or a pull request even, just make sure all tests pass (and please add new ones!).

## License

MIT
