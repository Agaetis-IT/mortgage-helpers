import calculateMonthlyPayments from "./internal/calculateMonthlyMortgagePayments";
import calculateMaximumBorrowingCapacity from "./internal/calculateMaximumBorrowingCapacity";

export const getMonthlyPayments = (loanAmount: number, interestRate: number, months: number) => {

  if (!loanAmount || interestRate == null || !months || isNaN(loanAmount) || isNaN(interestRate) || isNaN(months)) {
    throw "Either there are missing/invalid params, or loanAmount/months is equal to 0 which is not possible"
  }

  return +calculateMonthlyPayments(+loanAmount, +interestRate, +months).toFixed(2)
}

export const getMaximumBorrowingCapacity = (availableRevenue: number, interestRate: number, months: number, maximumDebtRatio: number) => {

  if (!availableRevenue || interestRate == null || !months ||!maximumDebtRatio || isNaN(availableRevenue) || isNaN(interestRate) || isNaN(months) || isNaN(maximumDebtRatio)) {
    throw "Either there are missing/invalid params, or availableRevenue/months/maximumDebtRatio is equal to 0 which is not possible"
  }

  return calculateMaximumBorrowingCapacity(+availableRevenue, +interestRate, +months, +maximumDebtRatio)
}

export default {
  getMonthlyPayments,
  getMaximumBorrowingCapacity
}
