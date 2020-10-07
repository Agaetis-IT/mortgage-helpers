// eslint-disable-next-line @typescript-eslint/no-var-requires
const mortgageHelpers = require('../src/mortgageHelpers')

test('correct savings monthly objective', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(0, 1256.56, 10, 12)).toBe(100)
})

test('correct savings monthly objective with initial sum', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 2356.56, 10, 12)).toBe(100)
})

test('correct savings monthly objective of 0', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 1331, 10, 36)).toBe(0)
})

test('correct savings monthly objective on 3 years', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(0, 4178.18, 10, 36)).toBe(100)
})

test('correct savings monthly objective on 3 years with initial sum', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 5509.18, 10, 36)).toBe(100)
})

test('SMO with 0 interest', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 2200, 0, 36)).toBe(33.33)
})

test('SMO with negative interest', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 1000, -1, 12)).toBe(0.84)
})

test('incorrect SMO', () => {
  expect(() => mortgageHelpers.getSavingsMonthlyObjective(0, 0, 0, 0)).toThrow(
    "Either there are missing/invalid params, or \"months\" is equal to 0 or is negative, which is not possible"
  )
})

test('SMO with incorrect string param', () => {
  expect(() => mortgageHelpers.getSavingsMonthlyObjective('test', 10, 0, 36)).toThrow(
    "Either there are missing/invalid params, or \"months\" is equal to 0 or is negative, which is not possible"
  )
})
