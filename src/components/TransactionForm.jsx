import { useState } from "react";
import { categories } from "../data/categories";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "Food",
    date: new Date().toISOString().slice(0, 10),
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title || !form.amount) return;

    onAdd({
      ...form,
      id: Date.now().toString(),
      amount: Number(form.amount),
    });

    // reset form
    setForm({
      title: "",
      amount: "",
      type: "expense",
      category: "Food",
      date: new Date().toISOString().slice(0, 10),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-5 rounded-xl space-y-4">
      <h2 className="text-xl font-bold text-white">Add Transaction</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="form-input"
        />

        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="form-input"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select name="type" value={form.type} onChange={handleChange} className="form-input">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="form-input"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <button className="primary-btn w-full">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;