import { useEffect, useState } from "react";
import { defaultTransactions } from "../data/categories";
import StatCard from "../components/StatCard";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import CategoryPieChart from "../components/CategoryPieChart";
import {
  calculateTotals,
  getCategoryExpenses,
  getIncomeExpenseData,
} from "../utils/calculateTotals";
import { formatCurrency } from "../utils/formatCurrency";

function Reports() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");

    if (saved) {
      setTransactions(JSON.parse(saved));
    } else {
      setTransactions(defaultTransactions);
    }
  }, []);

  const totals = calculateTotals(transactions);
  const categoryData = getCategoryExpenses(transactions);
  const incomeExpenseData = getIncomeExpenseData(transactions);

  const savingsRate =
    totals.income > 0
      ? (((totals.income - totals.expense) / totals.income) * 100).toFixed(1)
      : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Reports</h1>
        <p className="text-slate-400 mt-1">
          Visual summary of your financial activity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard
          title="Total Income"
          value={formatCurrency(totals.income)}
          icon="📈"
        />

        <StatCard
          title="Total Expense"
          value={formatCurrency(totals.expense)}
          icon="💸"
        />

        <StatCard
          title="Savings Rate"
          value={`${savingsRate}%`}
          icon="💎"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <IncomeExpenseChart data={incomeExpenseData} />
        <CategoryPieChart data={categoryData} />
      </div>
    </div>
  );
}

export default Reports;