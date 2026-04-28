export function calculateTotals(transactions) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  return {
    income,
    expense,
    balance: income - expense,
  };
}

export function getCategoryExpenses(transactions) {
  const categoryTotals = {};

  transactions
    .filter((transaction) => transaction.type === "expense")
    .forEach((transaction) => {
      if (categoryTotals[transaction.category]) {
        categoryTotals[transaction.category] += Number(transaction.amount);
      } else {
        categoryTotals[transaction.category] = Number(transaction.amount);
      }
    });

  return Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));
}

export function getIncomeExpenseData(transactions) {
  return transactions.map((transaction) => ({
    name: transaction.date,
    income: transaction.type === "income" ? Number(transaction.amount) : 0,
    expense: transaction.type === "expense" ? Number(transaction.amount) : 0,
  }));
}