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

export type DetailedResultPrice = {
  time: number
  incomeTax: number
  netIncome: number
  amortization: number
  interestToPay: number
  installmentValue: number
  valueBeforeAmortization: number
  valueAfterAmortization: number
}

export type InvestimentType = 'simple' | 'price'
