

export interface MaximumBorrowingCapacity {
	monthlyPayment: number
	interestsAmount: number
	loanAmount: number
}

const calculateMaximumBorrowingCapacity = (availableRevenue: number, interestRate: number, months: number, maximumDebtRatio: number): MaximumBorrowingCapacity => {

	if (maximumDebtRatio > 1) {
		maximumDebtRatio = maximumDebtRatio / 100
	}
	if (interestRate === 0) {
		return {
			loanAmount: +(availableRevenue * maximumDebtRatio * months).toFixed(2),
			monthlyPayment: +(availableRevenue * maximumDebtRatio).toFixed(2),
			interestsAmount: 0
		}
	}

	const monthlyInterestRate = interestRate / 100 / 12
	const pow = Math.pow((1+monthlyInterestRate), months)
	const totalLoanAmount = (availableRevenue * maximumDebtRatio * (pow - 1)) / (monthlyInterestRate * pow)

	const monthlyPayment = totalLoanAmount / months
	const loanAmount = ((pow - 1) * monthlyPayment) / (monthlyInterestRate * pow)

	return {
		loanAmount: +loanAmount.toFixed(2),
		monthlyPayment: +monthlyPayment.toFixed(3),
		interestsAmount: +(totalLoanAmount - loanAmount).toFixed(2)
	}
}

export default calculateMaximumBorrowingCapacity
