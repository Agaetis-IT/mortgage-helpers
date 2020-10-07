const calculateSavingsMonthlyObjective = (initialCapital: number, objectiveCapital: number, yearlyInterest: number, months: number) => {

    if (yearlyInterest === 0) {
        return (+(objectiveCapital - initialCapital).toFixed(4) / months)
    }

    yearlyInterest = yearlyInterest / 100
    const initialCapitalInterests = initialCapital * Math.pow(1 + yearlyInterest, months / 12)

    if (initialCapitalInterests.toFixed(2) === objectiveCapital.toFixed(2)) {
        return 0
    }
    const monthlyInterest = yearlyInterest / 12

    return (+(objectiveCapital - initialCapitalInterests).toFixed(4) * monthlyInterest) / (Math.pow(1 + monthlyInterest, months) - 1)
}

export default calculateSavingsMonthlyObjective