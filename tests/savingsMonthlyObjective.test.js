// eslint-disable-next-line @typescript-eslint/no-var-requires
const mortgageHelpers = require('../src/mortgageHelpers')

test('correct savings monthly objective', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(0, 10, 12, 1256.56)).toBe(100)
})

test('correct savings monthly objective with initial sum', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 10, 12, 2356.56)).toBe(100)
})

test('correct savings monthly objective of 0', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 10, 36, 1331)).toBe(0)
})

test('correct savings monthly objective on 3 years', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(0, 10, 36, 4178.18)).toBe(100)
})

test('correct savings monthly objective on 3 years with initial sum', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 10, 36, 5509.18)).toBe(100)
})

test('SMO with 0 interest', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, 0, 36, 2200)).toBe(33.33)
})

test('SMO with negative interest', () => {
  expect(mortgageHelpers.getSavingsMonthlyObjective(1000, -1, 12, 2000)).toBe(84.55)
})

test('incorrect SMO', () => {
  expect(() => mortgageHelpers.getSavingsMonthlyObjective(0, 0, 0, 0)).toThrow(
    'Either there are missing/invalid params, or one of the followings: "months" is <= 0, "initialCapital" or "objectiveCapital" is negative, or objectiveCapital is lower than initialCapital which is not allowed'
  )
})

test('SMO with incorrect string param', () => {
  expect(() => mortgageHelpers.getSavingsMonthlyObjective('test', 10, 0, 36)).toThrow(
    'Either there are missing/invalid params, or one of the followings: "months" is <= 0, "initialCapital" or "objectiveCapital" is negative, or objectiveCapital is lower than initialCapital which is not allowed'
  )
})
