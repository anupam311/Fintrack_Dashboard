import { formatCurrency } from "../utils/formatCurrency";

function TransactionList({ transactions }) {
  if (transactions.length === 0) {
    return (
      <div className="glass-card p-6 text-center text-slate-400">
        No transactions found
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-white/5">
          <tr>
            <th className="px-5 py-3 text-xs text-slate-400">Date</th>
            <th className="px-5 py-3 text-xs text-slate-400">Title</th>
            <th className="px-5 py-3 text-xs text-slate-400">Category</th>
            <th className="px-5 py-3 text-xs text-slate-400 text-right">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-t border-white/5">
              <td className="px-5 py-4 text-sm">{txn.date}</td>

              <td className="px-5 py-4 text-sm font-semibold">
                {txn.title}
              </td>

              <td className="px-5 py-4 text-sm text-slate-400">
                {txn.category}
              </td>

              <td className="px-5 py-4 text-right font-bold">
                <span
                  className={
                    txn.type === "income"
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {txn.type === "income" ? "+" : "-"}
                  {formatCurrency(txn.amount)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;