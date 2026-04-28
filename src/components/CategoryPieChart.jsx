import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const colors = ["#0ea5e9", "#4fdbc8", "#c0c1ff", "#ffb4ab", "#89ceff"];

function CategoryPieChart({ data }) {
  return (
    <div className="glass-card rounded-xl p-5">
      <h2 className="text-xl font-bold text-white mb-1">
        Category-wise Expenses
      </h2>
      <p className="text-slate-400 text-sm mb-5">
        Shows where most of your money is being spent
      </p>

      <div className="h-80">
        {data.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400">
            No expense data available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {data.map((item, index) => (
                  <Cell key={item.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default CategoryPieChart;