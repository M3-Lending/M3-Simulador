type CalcInstallments = {
  value: number
  interestRate: number
  term: number
}

export const calcInstallments = ({
  value,
  term,
  interestRate
}: CalcInstallments): number => {

  const numerator = ((1 + interestRate) ** term) * interestRate
  const denominator = ((1 + interestRate) ** term) - 1


  return value * (numerator / denominator)


}
