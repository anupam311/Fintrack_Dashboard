function StatCard({ title, value, icon }) {
  return (
    <div className="glass-card p-5 rounded-xl flex flex-col justify-between min-h-32">
      <div className="text-2xl mb-3">{icon}</div>

      <div>
        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-white mt-1">
          {value}
        </h3>
      </div>
    </div>
  );
}

export default StatCard;