import { calcIncomeTaxValue } from "."
import { DetailedResult, SimulationTotalValues } from "../../../shared/types"
import { storage } from "../../../shared/utils/storage"

type InvestSimpleProps = {
  value: number
  interestRate: number
  time: number
}



export const calculateSimpleInvestment = ({ interestRate, time, value }: InvestSimpleProps) => {

  const grossIncome =
    value * (interestRate / 100);


  const resultOfAllTime = [];

  for (let i = 0; i < time; i++) {
    const incomeTax = grossIncome * (calcIncomeTaxValue(i + 1) / 100);

    const resultByMonth: DetailedResult = {
      time: String(i + 1),
      netIncome: String(grossIncome - incomeTax),
      grossIncome: grossIncome.toFixed(2),
      incomeTax: incomeTax.toFixed(2),
    };

    resultOfAllTime.push(resultByMonth);
  }


  const totalGrossIncome = resultOfAllTime.reduce(
    (accumulator, actual) => accumulator + parseFloat(actual.grossIncome),
    0
  );

  const totalIncomeTax = resultOfAllTime.reduce(
    (accumulator, actual) => accumulator + parseFloat(actual.incomeTax),
    0
  );

  const totalNetIncome = resultOfAllTime.reduce(
    (accumulator, actual) => accumulator + parseFloat(actual.netIncome),
    0
  );

  const simulationResult: SimulationTotalValues = {
    totalNetIncome,
    totalIncomeTax,
    totalGrossIncome,
    amountInvested: value,
  };

  storage.set("simulationResult", JSON.stringify(simulationResult));
  storage.set(
    "informations",
    JSON.stringify({
      time,
      interestRate,
    })

  );

  return resultOfAllTime


}
