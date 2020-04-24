const mortgageHelpers = require('../src/mortgageHelpers');

test('correct maximum loan capacity', () => {
  expect(mortgageHelpers.getMaximumBorrowingCapacity(4000, 1, 30, 33)).toEqual({
    interestsAmount: 500.49, 
    loanAmount: 38592.52,
    monthlyPayment: 1303.101,
  });
});

test('incorrect MLC', () => {
  try {
    mortgageHelpers.getMaximumBorrowingCapacity(4000, 1, undefined, undefined)
    expect.not(true)
  } catch(e) {
    expect(e).toBe("Either there are missing/invalid params, or availableRevenue/months/maximumDebtRatio is equal to 0 which is not possible")
  }
});

test('MMP with 0 interest', () => {
  expect(mortgageHelpers.getMaximumBorrowingCapacity(4000, 0, 30, 33)).toEqual({
    interestsAmount: 0, 
    loanAmount: 39600,
    monthlyPayment: 1320,
  });
});

test('MMP with strings', () => {  
  expect(mortgageHelpers.getMaximumBorrowingCapacity('4000', 1, '30', 33)).toEqual({
    interestsAmount: 500.49, 
    loanAmount: 38592.52,
    monthlyPayment: 1303.101,
  });
});

test('MMP with incorrect string param', () => {
  try {
    mortgageHelpers.getMaximumBorrowingCapacity('test', 1, '30', 33)
    expect.not(true)
  } catch(e) {
    expect(e).toBe("Either there are missing/invalid params, or availableRevenue/months/maximumDebtRatio is equal to 0 which is not possible")
  }
});