import { getFormatterForCurrency } from "../../../shared/utils/formatters";
import { storage } from "../../../shared/utils/storage";
import { SimulationResultProps } from "../types";

export const useSimulationResultModel = () => {
  const informations = storage.get("informations");

  const results = storage.get("simulationResult");

  const resultsByMounth = storage.get("detailedResults");

  const format = getFormatterForCurrency();

  const simulationResult: SimulationResultProps[] = [
    {
      label: format.format(results?.amountInvested || 0),
      description: "Valor invesito",
    },
    {
      label: format.format(results?.totalGrossIncome || 0),
      description: "Rendimento bruto",
    },
    {
      label: format.format(results?.totalIncomeTax || 0),
      description: "Imposto de renda",
    },
    {
      label: format.format(results?.totalNetIncome || 0),
      description: "Rendimento líquido",
    },
  ];

  return {
    informations,
    resultsByMounth,
    simulationResult,
  };
};
