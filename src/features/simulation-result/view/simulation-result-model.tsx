import { useReactToPrint } from "react-to-print";
import { getFormatterForCurrency } from "../../../shared/utils/formatters";
import { storage } from "../../../shared/utils/storage";
import { SimulationResultProps } from "../types";
import React from "react";

export const useSimulationResultModel = () => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const results = storage.get("simulationResult");
  const informations = storage.get("informations");
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

  const downloadPDF = useReactToPrint({
    contentRef,
    pageStyle: `
        @page {
          size: auto;  
          margin: 20mm;
        }
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        * {
          overflow: visible !important;
        }
      `,
  });

  return {
    downloadPDF,
    contentRef,
    informations,
    resultsByMounth,
    simulationResult,
  };
};
