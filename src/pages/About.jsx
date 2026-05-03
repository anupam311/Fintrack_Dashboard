function About() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold">
          About FinTrack
        </h1>
        <p className="text-secondary mt-1">
          A personal finance dashboard built using React
        </p>
      </div>

      {/* Project Description */}
      <div className="glass-card p-5 rounded-xl space-y-3">
        <h2 className="text-xl font-bold">
          Project Overview
        </h2>
        <p className="text-secondary text-sm">
          FinTrack is a frontend-based financial dashboard that helps users
          manage their income and expenses efficiently. It provides a clear
          visual representation of financial data using charts and real-time
          updates.
        </p>
      </div>

      {/* Features */}
      <div className="glass-card p-5 rounded-xl space-y-3">
        <h2 className="text-xl font-bold">
          Key Features
        </h2>

        <ul className="text-secondary list-disc pl-5 text-sm space-y-1">
          <li>Add, edit and delete transactions (CRUD)</li>
          <li>Persistent data using localStorage</li>
          <li>Dashboard with income, expense and balance summary</li>
          <li>Crypto market integration using CoinGecko API</li>
          <li>Search, sorting and pagination on market page</li>
          <li>Reports page with charts using Recharts</li>
          <li>Responsive design for different screen sizes</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="glass-card p-5 rounded-xl space-y-3">
        <h2 className="text-xl font-bold">
          Tech Stack
        </h2>

        <ul className="text-secondary list-disc pl-5 text-sm space-y-1">
          <li>React (Vite)</li>
          <li>JavaScript (ES6+)</li>
          <li>Tailwind CSS</li>
          <li>Recharts (for data visualization)</li>
          <li>CoinGecko API (for crypto data)</li>
          <li>localStorage (for data persistence)</li>
        </ul>
      </div>

      {/* Working Explanation */}
      <div className="glass-card p-5 rounded-xl space-y-3">
        <h2 className="text-xl font-bold">
          How It Works
        </h2>

        <p className="text-secondary text-sm leading-relaxed">
          The application stores transactions in localStorage. When the user
          adds or modifies a transaction, the state is updated and saved. The
          dashboard and reports pages read from the same stored data to ensure
          consistency across the application.
        </p>
      </div>

      {/* Future Scope */}
      <div className="glass-card p-5 rounded-xl space-y-3">
        <h2 className="text-xl font-bold">
          Future Improvements
        </h2>

        <ul className="text-secondary list-disc pl-5 text-sm space-y-1">
          <li>Backend integration for real user accounts</li>
          <li>Authentication and login system</li>
          <li>Real-time syncing across devices</li>
          <li>Advanced analytics and budgeting tools</li>
          <li>Integration with digital wallets and banking APIs</li>
        </ul>
      </div>
    </div>
  );
}

export default About;