import { calcIncomeTaxValue } from "."
import { SimulationTotalValues } from "../../../shared/types"

type InvestPriceProps = {
  value: number
  interestRate: number
  time: number
}

export const calculatePriceInvestment = ({ interestRate, time, value }: InvestPriceProps) => {
  let valueAfterAmortization = value;

  const installmentValue = calcInstallments({
    time,
    value,
    interestRate,
  });

  const result = [];

  for (let i = 0; i < time; i++) {

    const interestToPay = valueAfterAmortization * (interestRate / 100);

    const amortization = installmentValue - interestToPay;
    const incomeTax = interestToPay * (calcIncomeTaxValue(1) / 100);

    const operationObj = {
      incomeTax,
      time: i + 1,
      amortization,
      interestToPay,
      installmentValue,
      netIncome: installmentValue - incomeTax,
      valueBeforeAmortization: valueAfterAmortization,
      valueAfterAmortization: valueAfterAmortization > 0 ? valueAfterAmortization - amortization : 0,
    };




    result.push(operationObj);

    valueAfterAmortization = valueAfterAmortization - amortization
  }

  const totalGrossIncome = result.reduce((acc, act) => acc + act.interestToPay, 0)

  const totalIncomeTax = result.reduce((acc, act) => acc + act.incomeTax, 0)

  const totalNetIncome = result.reduce((acc, act) => acc + act.netIncome, 0)

  const simulationResult: SimulationTotalValues = {
    totalGrossIncome,
    amountInvested: value,
    totalNetIncome: totalNetIncome - value,
    totalIncomeTax: parseFloat(totalIncomeTax.toFixed(2)),
  };

  return {
    result,
    simulationResult
  }
}


export const calcInstallments = ({
  time,
  value,
  interestRate
}: InvestPriceProps): number => {

  const trattedInterestRate = interestRate / 100

  const numerator = ((1 + trattedInterestRate) ** time) * trattedInterestRate
  const denominator = ((1 + trattedInterestRate) ** time) - 1

  const result = (value * (numerator / denominator)).toFixed(2)


  return Number(result)


}
