import { useState } from "react";
import { defaultTransactions } from "../data/categories";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";

function Transactions() {
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [editingTxn, setEditingTxn] = useState(null);

  function addTransaction(newTxn) {
    setTransactions((prev) => [newTxn, ...prev]);
  }

  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((txn) => txn.id !== id));
  }

  function updateTransaction(updatedTxn) {
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.id === updatedTxn.id ? updatedTxn : txn
      )
    );

    setEditingTxn(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Transactions
        </h1>
        <p className="text-slate-400 mt-1">
          Add, edit and manage your transactions
        </p>
      </div>

      <TransactionForm
        onAdd={addTransaction}
        onUpdate={updateTransaction}
        editingTxn={editingTxn}
      />

      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
        onEdit={setEditingTxn}
      />
    </div>
  );
}

export default Transactions;