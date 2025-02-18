export const getFormatterForCurrency = () => {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
};
