import { formatCurrency } from "../utils/formatCurrency";

function TransactionList({ transactions, onDelete, onEdit }) {
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
        <thead className="thead-bg">
          <tr>
            <th className="px-5 py-3 text-xs text-secondary">Date</th>
            <th className="px-5 py-3 text-xs text-secondary">Title</th>
            <th className="px-5 py-3 text-xs text-secondary">Category</th>
            <th className="px-5 py-3 text-xs text-secondary text-right">
              Amount
            </th>
            <th className="px-5 py-3 text-xs text-secondary text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-t border-white/5">
              <td className="px-5 py-4">{txn.date}</td>

              <td className="px-5 py-4 font-semibold">
                {txn.title}
              </td>

              <td className="px-5 py-4 text-secondary">
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

              <td className="px-5 py-4 text-right space-x-2">
                <button
                  onClick={() => onEdit(txn)}
                  className="text-blue-400 hover:underline text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(txn.id)}
                  className="text-red-400 hover:underline text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;