export default function displayAmountInDollars(amount: number): string {
  const balance = (amount / 100).toFixed(2);
  return balance;
}
