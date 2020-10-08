export interface MaximumBorrowingCapacity {
  monthlyPayment: number
  interestsAmount: number
  loanAmount: number
}

const calculateMaximumBorrowingCapacity = (
  availableRevenue: number,
  interestRate: number,
  months: number,
  maximumDebtRatio: number
): MaximumBorrowingCapacity => {
  maximumDebtRatio = maximumDebtRatio / 100
  const monthlyPayment = availableRevenue * maximumDebtRatio
  const totalLoanAmount = monthlyPayment * months

  if (interestRate === 0) {
    return {
      loanAmount: +totalLoanAmount.toFixed(2),
      monthlyPayment: +monthlyPayment.toFixed(2),
      interestsAmount: 0,
    }
  }

  const monthlyInterestRate = interestRate / 100 / 12
  const pow = Math.pow(1 + monthlyInterestRate, months)
  const loanAmount = ((pow - 1) * monthlyPayment) / (monthlyInterestRate * pow)

  return {
    loanAmount: +loanAmount.toFixed(2),
    monthlyPayment: +monthlyPayment.toFixed(2),
    interestsAmount: +(totalLoanAmount - loanAmount).toFixed(2),
  }
}

export default calculateMaximumBorrowingCapacity
