export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    currencyDisplay: "code",
  }).format(amount);
};