// eslint-disable-next-line @typescript-eslint/no-var-requires
const mortgageHelpers = require('../src/mortgageHelpers')

test('correct interest rate computation', () => {
  expect(mortgageHelpers.getInterestRate(75000, 425.84, 360)).toBe(5.5)
})

test('correct interest rate computation 2', () => {
  expect(mortgageHelpers.getInterestRate(10000, 421.02, 24)).toBe(1)
})

test('correct interest rate computation 3', () => {
  expect(mortgageHelpers.getInterestRate(33001.5, 533.33, 77)).toBe(7.005)
})

test('correct interest rate computation 0 interest', () => {
  expect(mortgageHelpers.getInterestRate(250000, 833.33, 300)).toBe(0)
})

test('incorrect IRC', () => {
  expect(() => mortgageHelpers.getInterestRate(4000, undefined, undefined)).toThrow(
    'Either there are missing/invalid params, or loanAmount/months/montlhyPayments is equal to 0 which is not possible'
  )
})
/*
test('Errored IRC', () => {
  expect(() => mortgageHelpers.getInterestRate(33001.55, 533.66, 77)).toThrow(
    "Couldn't find corresponding interest rate, the computation may be too hard for JavaScript (try reducing the amount of decimals if possible)"
  )
})
*/