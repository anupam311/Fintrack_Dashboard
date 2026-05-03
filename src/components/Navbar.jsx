import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  // Toggle theme
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("light", newTheme === "light");
  }

  return (
    <header className="navbar">
      
      <div className="thead-bg relative w-full max-w-xl rounded-lg">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search markets, assets, or tools..."
          className="w-full border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm placeholder:text-slate-500 outline-none focus:border-sky-500"
        />
      </div>

      <div className="flex items-center gap-4">
        
        {/* Notifications */}
        <div className="relative">
          <button onClick={() => setShowNotif(!showNotif)}>🔔</button>

          {showNotif && (
            <div className="absolute right-0 mt-2 glass-card p-3 rounded-lg text-sm">
              No new notifications
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* Profile */}
        <div className="relative">
          <button onClick={() => setShowProfile(!showProfile)}>
            👤
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 glass-card p-3 rounded-lg text-sm space-y-2">
              <p>Profile</p>
              <p>Settings</p>
              <p className="text-red-400">Logout</p>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;