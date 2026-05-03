# 💰 FinTrack Dashboard

A modern financial dashboard built using **React + Vite**, designed to manage transactions, visualize financial data, and explore crypto markets.

---

## 🚀 Live Demo

🔗 https://fintrack-dashboard-rosy.vercel.app/

---

## 🚀 Features

* 📊 Dashboard with total balance, income, and expenses
* 🧾 Full CRUD operations for transactions
* 💾 Data persistence using localStorage
* 📈 Reports with charts (Recharts)
* 💱 Crypto market integration (CoinGecko API)
* 🔍 Search, sorting, and pagination
* 🌙 Light/Dark theme toggle using CSS variables
* 📱 Responsive UI

---

## 🧠 Core Functionalities (Important)

### 🔹 Transaction Management

* `addTransaction()` → Adds new transaction
* `updateTransaction()` → Edits existing transaction
* `deleteTransaction()` → Removes transaction
* `useState()` → Manages transaction state
* `useEffect()` → Syncs data with localStorage

---

### 🔹 Data Persistence

* `localStorage.getItem()` → Loads saved transactions
* `localStorage.setItem()` → Saves updated transactions

---

### 🔹 Financial Calculations

* `calculateTotals()` → Computes:

  * Total income
  * Total expense
  * Balance

* `getCategoryExpenses()` → Groups expenses by category

* `getIncomeExpenseData()` → Prepares data for charts

---

### 🔹 Crypto Market (API Integration)

* `fetchCoins()` → Fetches crypto data from CoinGecko API
* `useEffect()` → Calls API on component mount
* `useState()` → Stores API data

---

### 🔹 Market Features

* Search → Filters coins by name/symbol
* Sort → By price / market cap / 24h change
* Pagination → Displays 10 coins per page

---

### 🔹 Charts (Recharts)

* Bar Chart → Income vs Expense
* Pie Chart → Category-wise expenses

---

### 🔹 Theme System

* `document.documentElement.classList.toggle()`
  → Switches between light and dark mode

* CSS Variables:

  * `--bg`, `--text`, `--surface`, etc.
    → Dynamically update UI colors

---

## 🛠 Tech Stack

* React (Vite)
* JavaScript (ES6+)
* Tailwind CSS
* Recharts
* CoinGecko API
* localStorage

---

## 📂 Project Structure

```
FinTrack-Dashboard/
│
├── src/
│   ├── components/
│   │   ├── CategoryPieChart.jsx
│   │   ├── IncomeExpenseChart.jsx
│   │   ├── Layout.jsx
│   │   ├── MobileNav.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionList.jsx
│   │   └── WalletModel.jsx
│   │   
│   ├── data/
│   │   └── categories.js
│   │ 
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Market.jsx
│   │   ├── Reports.jsx
│   │   └── Transactions.jsx
│   │ 
│   ├── services/
│   │   └── cryptoApi.js
│   │
│   ├── utils/
│   │   ├── calculateTotals.js
│   │   └── formatCurrency.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ How to Run

```bash
npm install
npm run dev
```

---

## 🌐 API Used

CoinGecko API
https://www.coingecko.com/en/api

---

## 📌 Future Improvements

* User authentication
* Backend integration (database)
* Real-time sync across devices
* Budget tracking system
* Actual wallet integration

---

## 👨‍💻 Author

Anupam Chaudhary
