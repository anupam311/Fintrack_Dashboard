import { useEffect, useState } from "react";
import { calculateTotals } from "../utils/calculateTotals";
import { formatCurrency } from "../utils/formatCurrency";
import StatCard from "../components/StatCard";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("transactions");

    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  const totals = calculateTotals(transactions);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Financial Overview
        </h1>
        <p className="text-slate-400 mt-1">
          Summary of your income and expenses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatCard
          title="Total Balance"
          value={formatCurrency(totals.balance)}
          icon="💼"
        />

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
      </div>
    </div>
  );
}

export default Dashboard;