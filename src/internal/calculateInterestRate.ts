
const calculateInterestRate = (loanAmount: number, montlhyPayments: number, months: number) => {
    
    if (montlhyPayments * months === loanAmount) {
        return 0
    }

    const searchTarget = (montlhyPayments * 12) / loanAmount
    try {
        return +(findInterestRate(searchTarget, months, 0, 100) * 100).toFixed(3)
    } catch(e) {
        throw "Couldn't find corresponding interest rate, the computation may be too hard for JavaScript (try reducing the amount of decimals if possible)"
    }
}
 // recursive binary search for interest rate since equation is too complex
const findInterestRate = (searchTarget: number, months: number, starting: number, ending: number) => {
    if (ending < starting) throw "could not find interest rate"

    const interestRateGuess = (starting + ending) / 2
    const result = interestRateGuess / (1 - (1 / Math.pow(1 + interestRateGuess / 12, months)))

    if (result === searchTarget) {
        return interestRateGuess
    } else if( result > searchTarget) {
        return findInterestRate(searchTarget, months, starting, interestRateGuess)
    } else {
        return findInterestRate(searchTarget, months, interestRateGuess, ending)
    }
}

export default calculateInterestRate