// eslint-disable-next-line @typescript-eslint/no-var-requires
const mortgageHelpers = require('../src/mortgageHelpers')

test('correct term savings', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(1000, 10, 12, 0)).toBe(1100)
})

test('correct term savings on 3 years', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(1000, 10, 36)).toBe(1331)
})

test('correct term savings with montly payments', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(0, 10, 12, 100)).toBe(1256.56)
})

test('correct term savings with montly payments with inital sum', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(1000, 10, 12, 100)).toBe(2356.56)
})

test('correct term savings with montly payments on 3 years', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(0, 10, 36, 100)).toBe(4178.18)
})

test('correct term savings with montly payments on 3 years with initial sum', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(1000, 10, 36, 100)).toBe(5509.18)
})

test('term savings with 0 interest', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(1000, 0, 36, 100)).toBe(4600)
})

test('term savings with negative interest', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity(1000, -1, 36, 100)).toBe(4518.29)
})

test('term savings with strings', () => {
  expect(mortgageHelpers.getSavingsCapitalAtMaturity('1000', '10', '36', '100')).toBe(5509.18)
})

test('incorrect TS', () => {
  expect(() => mortgageHelpers.getSavingsCapitalAtMaturity(0, 10, 0, 100)).toThrow(
    'Either there are missing/invalid params, or months is undefined or equal to 0 which is not possible'
  )
})

test('TS with incorrect string param', () => {
  expect(() => mortgageHelpers.getSavingsCapitalAtMaturity('test', 10, 3)).toThrow(
    'Either there are missing/invalid params, or months is undefined or equal to 0 which is not possible'
  )
})
