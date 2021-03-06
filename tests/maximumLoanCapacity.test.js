// eslint-disable-next-line @typescript-eslint/no-var-requires
const mortgageHelpers = require('../src/mortgageHelpers')

test('correct maximum loan capacity', () => {
  expect(mortgageHelpers.getMaximumBorrowingCapacity(4000, 1, 30, 33)).toEqual({
    interestsAmount: 506.98,
    loanAmount: 39093.02,
    monthlyPayment: 1320,
  })
})

test('MMP with 0 interest', () => {
  expect(mortgageHelpers.getMaximumBorrowingCapacity(4000, 0, 30, 33)).toEqual({
    interestsAmount: 0,
    loanAmount: 39600,
    monthlyPayment: 1320,
  })
})

test('MMP with strings', () => {
  expect(mortgageHelpers.getMaximumBorrowingCapacity('4000', 1, '30', 33)).toEqual({
    interestsAmount: 506.98,
    loanAmount: 39093.02,
    monthlyPayment: 1320,
  })
})

test('incorrect MLC', () => {
  expect(() => mortgageHelpers.getMaximumBorrowingCapacity(4000, 1, undefined, undefined)).toThrow(
    "Either there are missing/invalid params, or one of \"availableRevenue\", \"months\" or \"maximumDebtRatio\" is equal to 0 or is negative, which is not possible"
  )
})

test('MMP with incorrect string param', () => {
  expect(() => mortgageHelpers.getMaximumBorrowingCapacity('test', 1, '30', 33)).toThrow(
    "Either there are missing/invalid params, or one of \"availableRevenue\", \"months\" or \"maximumDebtRatio\" is equal to 0 or is negative, which is not possible"
  )
})
