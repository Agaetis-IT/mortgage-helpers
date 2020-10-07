const calculateSavingsAtMaturity = (initialCapital: number, yearlyInterest: number, months: number, monthlyPayments: number) => {

    if (yearlyInterest === 0) {
        return initialCapital + monthlyPayments * months
    }
    yearlyInterest = yearlyInterest / 100
    const monthlyInterest = yearlyInterest / 12
    const finalSum = initialCapital * Math.pow(1 + yearlyInterest, months / 12)
    if (monthlyPayments) {
        // compute monthly payments interests in addition
        return finalSum + (monthlyPayments * (Math.pow(1 + monthlyInterest, months) - 1)) / monthlyInterest
    }
    return finalSum
}

export default calculateSavingsAtMaturity