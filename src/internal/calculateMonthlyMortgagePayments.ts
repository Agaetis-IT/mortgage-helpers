

const calculateMonthlyPayments = (loanAmount: number, interestRate: number, months: number) => {
  if (interestRate === 0) {
    return loanAmount / months
  }
  const monthlyInterestRate = interestRate / 100 / 12
  const pow = Math.pow(monthlyInterestRate + 1, months)
  return (monthlyInterestRate * loanAmount * pow) / (pow - 1)
}

export default calculateMonthlyPayments