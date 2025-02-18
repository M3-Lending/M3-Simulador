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

type TypeStorage = {
  simulationResult: SimulationTotalValues;
  informations: {
    time: string;
    interestRate: string;
  };
  detailedResults: DetailedResult[];
};

export const storage = {
  get<K extends keyof TypeStorage>(information: K): TypeStorage[K] | null {
    let data = null;
    if (typeof window !== "undefined") {
      data = localStorage.getItem(information);
    }

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as TypeStorage[K];
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      return data as unknown as TypeStorage[K];
    }
  },
  set<K extends keyof TypeStorage>(information: K, value: string) {
    if (typeof window !== "undefined") {
      localStorage?.setItem(information, value);
    }
  },
  remove<K extends keyof TypeStorage>(information: K) {
    if (typeof window !== "undefined") {
      localStorage?.removeItem(information);
    }
  },
  removeAll() {
    if (typeof window !== "undefined") {
      localStorage?.clear();
    }
  },
};
