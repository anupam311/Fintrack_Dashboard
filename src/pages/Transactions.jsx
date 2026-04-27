import { useState } from "react";
import { defaultTransactions } from "../data/categories";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";

function Transactions() {
  const [transactions, setTransactions] = useState(defaultTransactions);

  function addTransaction(newTxn) {
    setTransactions((prev) => [newTxn, ...prev]);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Transactions
        </h1>
        <p className="text-slate-400 mt-1">
          Add and manage your financial activity
        </p>
      </div>

      <TransactionForm onAdd={addTransaction} />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Transactions;