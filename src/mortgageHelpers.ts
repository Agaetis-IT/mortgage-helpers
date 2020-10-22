import calculateMonthlyPayments from './internal/calculateMonthlyMortgagePayments'
import calculateMaximumBorrowingCapacity, {
  MaximumBorrowingCapacity,
} from './internal/calculateMaximumBorrowingCapacity'
import calculateInterestRate from './internal/calculateInterestRate'
import calculateSavingsAtMaturity from './internal/calculateSavingsAtMaturity'
import calculateSavingsMonthlyObjective from './internal/calculateSavingsMonthlyObjective'

export const getMonthlyPayments = (loanAmount: number, interestRate: number, months: number): number => {
  if (
    !loanAmount ||
    interestRate == null ||
    !months ||
    isNaN(loanAmount) ||
    isNaN(interestRate) ||
    isNaN(months) ||
    months < 0 ||
    loanAmount < 0
  ) {
    throw 'Either there are missing/invalid params, or one of "loanAmount" or "months" is equal to 0 or is negative, which is not possible'
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
    maximumDebtRatio < 0 ||
    maximumDebtRatio > 100 ||
    months < 0 ||
    availableRevenue < 0
  ) {
    throw 'Either there are missing/invalid params, or one of "availableRevenue", "months" or "maximumDebtRatio" is equal to 0 or is negative, which is not possible'
  }

  return calculateMaximumBorrowingCapacity(+availableRevenue, +interestRate, +months, +maximumDebtRatio)
}

export const getInterestRate = (loanAmount: number, montlhyPayments: number, months: number): number => {
  if (
    !loanAmount ||
    !montlhyPayments ||
    !months ||
    isNaN(loanAmount) ||
    isNaN(montlhyPayments) ||
    isNaN(months) ||
    loanAmount < 0 ||
    months < 0 ||
    montlhyPayments < 0
  ) {
    throw 'Either there are missing/invalid params, or one of "loanAmount", "months" or "montlhyPayments" is equal to 0 or is negative, which is not possible'
  }

  return calculateInterestRate(+loanAmount, +montlhyPayments, +months)
}

export const getSavingsCapitalAtMaturity = (
  initialCapital: number,
  yearlyInterest: number,
  months: number,
  monthlyPayments: number
): number => {
  if (
    !months ||
    initialCapital == null ||
    yearlyInterest == null ||
    (monthlyPayments != null && isNaN(monthlyPayments)) ||
    isNaN(initialCapital) ||
    isNaN(yearlyInterest) ||
    isNaN(months) ||
    months < 0
  ) {
    throw 'Either there are missing/invalid params, or "months" is equal to 0 or is negative, which is not possible'
  }

  return +calculateSavingsAtMaturity(+initialCapital, +yearlyInterest, +months, +monthlyPayments).toFixed(2)
}

export const getSavingsMonthlyObjective = (
  initialCapital: number,
  yearlyInterest: number,
  months: number,
  objectiveCapital: number
): number => {
  if (
    !months ||
    objectiveCapital == null ||
    yearlyInterest == null ||
    initialCapital == null ||
    isNaN(initialCapital) ||
    isNaN(yearlyInterest) ||
    isNaN(objectiveCapital) ||
    isNaN(months) ||
    months < 0
  ) {
    throw 'Either there are missing/invalid params, or "months" is equal to 0 or is negative, which is not possible'
  }

  return +calculateSavingsMonthlyObjective(+initialCapital, +yearlyInterest, +months, +objectiveCapital).toFixed(2)
}

export default {
  getMonthlyPayments,
  getMaximumBorrowingCapacity,
  getInterestRate,
  getSavingsCapitalAtMaturity,
  getSavingsMonthlyObjective,
}
