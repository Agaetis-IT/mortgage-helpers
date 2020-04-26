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

This function will give you the **fixed** monthly amount to pay for a mortgage, based on its amount, interest rate and number of months.

```js
getMonthlyPayments: (
  loanAmount: number,
  interestRate: number,
  months: number
) => number;
```

If one param is missing or is not a valid number, it will throw an error.

### getMaximumBorrowingCapacity

This function will give you the maximum amount you can borrow, based on available revenue (monthly with deduced charges), interest rate, number of months and max debt ratio (a percentage which can either be a float, ie: `0.36`, or a number like `36`, which means either way `36%`).

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

### getInterestRate

This function will give you a loan's interest rate, based on loanAmount (what has been borrowed without interests), months duration and monthly payments. This is kinda the reverse of `getMonthlyPayments`. The interest rate will be a number with a maximum of 3 decimals.

```js
getInterestRate: (
  loanAmount: number,
  months: number
  monthlyPayments: number
) => {
  interestRate: number,
};
```

If one param is missing or is not a valid number, it will throw an error. Also please note this function may fail if computation is too hard (it mainly occurs if there are too many decimals in params)

## Contributing

Any new mortgage-related function is welcome! Feel free to open an issue, or a pull request even, just make sure all tests pass (and please add new ones!).

## License

MIT
