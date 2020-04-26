import calculateMonthlyPayments from "./internal/calculateMonthlyMortgagePayments";
import calculateMaximumBorrowingCapacity from "./internal/calculateMaximumBorrowingCapacity";
import calculateInterestRate from "./internal/calculateInterestRate";

export const getMonthlyPayments = (loanAmount: number, interestRate: number, months: number) => {

  if (!loanAmount || interestRate == null || !months || isNaN(loanAmount) || isNaN(interestRate) || isNaN(months)) {
    throw "Either there are missing/invalid params, or loanAmount/months is equal to 0 which is not possible"
  }

  return +calculateMonthlyPayments(+loanAmount, +interestRate, +months).toFixed(2)
}

export const getMaximumBorrowingCapacity = (availableRevenue: number, interestRate: number, months: number, maximumDebtRatio: number) => {

  if (!availableRevenue || interestRate == null || !months || !maximumDebtRatio || isNaN(availableRevenue) || isNaN(interestRate) || isNaN(months) || isNaN(maximumDebtRatio)) {
    throw "Either there are missing/invalid params, or availableRevenue/months/maximumDebtRatio is equal to 0 which is not possible"
  }

  return calculateMaximumBorrowingCapacity(+availableRevenue, +interestRate, +months, +maximumDebtRatio)
}

export const getInterestRate = (loanAmount: number, montlhyPayments: number, months: number) => {

  if (!loanAmount || !montlhyPayments || !months || isNaN(loanAmount) || isNaN(montlhyPayments) || isNaN(months)) {
    throw "Either there are missing/invalid params, or loanAmount/months/montlhyPayments is equal to 0 which is not possible"
  }

  return calculateInterestRate(+loanAmount, +montlhyPayments, +months)
}

export default {
  getMonthlyPayments,
  getMaximumBorrowingCapacity,
  getInterestRate
}
