import { useReactToPrint } from "react-to-print";
import { getFormatterForCurrency } from "../../../shared/utils/formatters";
import { storage } from "../../../shared/utils/storage";
import { SimulationResultProps } from "../types";
import React from "react";

export const useSimulationResultModel = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const results = storage.get("simulationResult");
  const investmentType = storage.get("investType");
  const informations = storage.get("informations");
  const resultsByMounth = storage.get("detailedResults");
  const resultsByMounthPrice = storage.get('detailedResultsPrice')
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

  const downloadPDF = useReactToPrint({
    contentRef,
    pageStyle: `
        @page {
          size: auto;  
          margin: 0;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        * {
          overflow: visible !important;
        }
        .pdf-view {
          display: block;
}
      `,
  });

  return {
    contentRef,
    downloadPDF,
    informations,
    investmentType,
    resultsByMounth,
    simulationResult,
    resultsByMounthPrice,
  };
};
