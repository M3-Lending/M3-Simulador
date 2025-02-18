export type DetailedResult = {
  time: string;
  netIncome: string;
  grossIncome: string;
  incomeTax: string;
};

export type SimulationTotalValues = {
  totalGrossIncome: number;
  totalIncomeTax: number;
  totalNetIncome: number;
  amountInvested: number;
};

export type Informations = {
  time: string;
  interestRate: string;
};
