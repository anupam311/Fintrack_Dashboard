import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Dash", icon: "📊" },
  { path: "/market", label: "Market", icon: "💱" },
  { path: "/transactions", label: "Txns", icon: "🧾" },
  { path: "/reports", label: "Stats", icon: "📈" },
];

function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 mobile-nav bg-slate-950 border-t border-white/5 flex justify-around items-center">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === "/"}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs font-bold ${
              isActive ? "text-sky-400" : "text-slate-400"
            }`
          }
        >
          <span>{link.icon}</span>
          <span>{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default MobileNav;