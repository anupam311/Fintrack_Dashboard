function Navbar() {
  return (
    <header className="h-16 sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-white/10 flex items-center justify-between px-6 shadow-xl shadow-sky-950/20">
      <div className="relative w-full max-w-xl">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search markets, assets, or tools..."
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 outline-none focus:border-sky-500"
        />
      </div>

      <div className="hidden sm:flex items-center gap-4 ml-4">
        <button className="text-slate-400 hover:text-sky-400">🔔</button>
        <button className="text-slate-400 hover:text-sky-400">🌙</button>
        <div className="w-9 h-9 rounded-full bg-slate-700 border border-white/20"></div>
      </div>
    </header>
  );
}

export default Navbar;