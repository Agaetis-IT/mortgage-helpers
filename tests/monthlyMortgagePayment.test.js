const mortgageHelpers = require('../src/mortgageHelpers');

test('correct monthly mortgage payment', () => {
  expect(mortgageHelpers.getMonthlyPayments(10000, 1, 24)).toBe(421.02);
});

test('incorrect MMP', () => {
  expect(() => mortgageHelpers.getMonthlyPayments(250000, 1, undefined)).toThrow("Either there are missing/invalid params, or loanAmount/months is equal to 0 which is not possible")
});

test('MMP with 0 interest', () => {
  expect(mortgageHelpers.getMonthlyPayments(250000, 0, 300)).toBe(833.33);
});

test('MMP with strings', () => {
  expect(mortgageHelpers.getMonthlyPayments('250000', '1', 300)).toBe(942.18);
});

test('MMP with incorrect string param', () => {
  expect(() => mortgageHelpers.getMonthlyPayments('test', '1', 300)).toThrow("Either there are missing/invalid params, or loanAmount/months is equal to 0 which is not possible")
});