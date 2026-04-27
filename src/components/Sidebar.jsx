import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Dashboard", icon: "📊" },
  { path: "/market", label: "Market", icon: "💱" },
  { path: "/transactions", label: "Transactions", icon: "🧾" },
  { path: "/reports", label: "Reports", icon: "📈" },
  { path: "/about", label: "About", icon: "ℹ️" },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen sticky top-0 w-64 bg-slate-950 border-r border-white/5">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black">
            ₹
          </div>

          <div>
            <h1 className="text-lg font-black text-white">FinTrack</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              Precision Wealth
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-sky-500/10 text-sky-400 border-r-2 border-sky-500 font-semibold"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button className="w-full py-3 bg-primary text-slate-950 font-bold rounded-xl">
          Connect Wallet
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;