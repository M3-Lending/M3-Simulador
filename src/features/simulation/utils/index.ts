export const calcIncomeTaxValue = (value: number) => {
  if (value <= 6) return 22.5;

  if (value > 6 && value <= 12) return 20.0;

  if (value > 12 && value <= 24) return 17.5;

  return 15.0;
};
