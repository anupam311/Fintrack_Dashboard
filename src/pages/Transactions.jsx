import { defaultTransactions } from "../data/categories";
import TransactionList from "../components/TransactionList";

function Transactions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Transactions
        </h1>
        <p className="text-slate-400 mt-1">
          View all your financial activity
        </p>
      </div>

      <TransactionList transactions={defaultTransactions} />
    </div>
  );
}

export default Transactions;