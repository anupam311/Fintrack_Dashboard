import { NavLink } from "react-router-dom";
import { useState } from "react";
import WalletModel from "./WalletModel";

const links = [
  { path: "/", label: "Dashboard", icon: "📊" },
  { path: "/market", label: "Market", icon: "💱" },
  { path: "/transactions", label: "Transactions", icon: "🧾" },
  { path: "/reports", label: "Reports", icon: "📈" },
  { path: "/about", label: "About", icon: "ℹ️" },
];

function Sidebar() {
  const [openWallet, setOpenWallet] = useState(false);

  return (
    <>
    <aside className="sidebar hidden md:flex flex-col h-screen sticky top-0 w-64 bg-slate-950 border-r border-white/5">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            ₹
          </div>

          <div>
            <h1 className="text-lg font-bold">FinTrack</h1>
            <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">
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
                    : "navlink"
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
        <button 
          onClick={() => setOpenWallet(true)}
          className="w-full py-3 primary-btn"
        >
          Connect Wallet
        </button>
      </div>
    </aside>

    <WalletModel open={openWallet} onClose={() => setOpenWallet(false)} />
    </>
  );
}

export default Sidebar;