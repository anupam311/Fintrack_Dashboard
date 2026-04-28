import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function IncomeExpenseChart({ data }) {
  return (
    <div className="glass-card rounded-xl p-5">
      <h2 className="text-xl font-bold text-white mb-1">
        Income vs Expense
      </h2>
      <p className="text-slate-400 text-sm mb-5">
        Visual comparison of income and expenses
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#4fdbc8" />
            <Bar dataKey="expense" fill="#ffb4ab" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default IncomeExpenseChart;