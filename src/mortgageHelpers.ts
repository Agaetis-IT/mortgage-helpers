import calculateMonthlyPayments from './internal/calculateMonthlyMortgagePayments'
import calculateMaximumBorrowingCapacity, {
  MaximumBorrowingCapacity,
} from './internal/calculateMaximumBorrowingCapacity'
import calculateInterestRate from './internal/calculateInterestRate'
import calculateSavingsAtMaturity from './internal/calculateSavingsAtMaturity'
import calculateSavingsMonthlyObjective from './internal/calculateSavingsMonthlyObjective'

export const getMonthlyPayments = (loanAmount: number, interestRate: number, months: number): number => {
  if (!loanAmount || interestRate == null || !months || isNaN(loanAmount) || isNaN(interestRate) || isNaN(months)) {
    throw 'Either there are missing/invalid params, or loanAmount/months is equal to 0 which is not possible'
  }

  return +calculateMonthlyPayments(+loanAmount, +interestRate, +months).toFixed(2)
}

export const getMaximumBorrowingCapacity = (
  availableRevenue: number,
  interestRate: number,
  months: number,
  maximumDebtRatio: number
): MaximumBorrowingCapacity => {
  if (
    !availableRevenue ||
    interestRate == null ||
    !months ||
    !maximumDebtRatio ||
    isNaN(availableRevenue) ||
    isNaN(interestRate) ||
    isNaN(months) ||
    isNaN(maximumDebtRatio) ||
    maximumDebtRatio <= 0 || 
    maximumDebtRatio > 100
  ) {
    throw 'Either there are missing/invalid params, or availableRevenue/months/maximumDebtRatio is equal to 0 which is not possible'
  }

  return calculateMaximumBorrowingCapacity(+availableRevenue, +interestRate, +months, +maximumDebtRatio)
}

export const getInterestRate = (loanAmount: number, montlhyPayments: number, months: number): number => {
  if (!loanAmount || !montlhyPayments || !months || isNaN(loanAmount) || isNaN(montlhyPayments) || isNaN(months)) {
    throw 'Either there are missing/invalid params, or loanAmount/months/montlhyPayments is equal to 0 which is not possible'
  }

  return calculateInterestRate(+loanAmount, +montlhyPayments, +months)
}

export const getSavingsCapitalAtMaturity = (initialCapital: number, yearlyInterest: number, months: number, monthlyPayments: number): number => {
  if (!months || yearlyInterest == null || isNaN(initialCapital) || isNaN(yearlyInterest) || isNaN(months)) {
    throw 'Either there are missing/invalid params, or months is undefined or equal to 0 which is not possible'
  }

  return +calculateSavingsAtMaturity(+initialCapital, +yearlyInterest, +months, +monthlyPayments).toFixed(2)
}

export const getSavingsMonthlyObjective = (initialCapital: number, objectiveCapital: number, yearlyInterest: number, months: number): number => {
  if (!months || !objectiveCapital || yearlyInterest == null || isNaN(initialCapital) || isNaN(yearlyInterest) || isNaN(objectiveCapital) || isNaN(months)) {
    throw 'Either there are missing/invalid params, or months is undefined or equal to 0 which is not possible'
  }

  return +calculateSavingsMonthlyObjective(+initialCapital, +objectiveCapital, +yearlyInterest, +months).toFixed(2)
}

export default {
  getMonthlyPayments,
  getMaximumBorrowingCapacity,
  getInterestRate,
  getSavingsCapitalAtMaturity,
  getSavingsMonthlyObjective
}
