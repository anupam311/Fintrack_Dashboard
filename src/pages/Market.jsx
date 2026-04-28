import { useEffect, useState } from "react";
import { fetchCoins } from "../services/cryptoApi";

function Market() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("market_cap");

  const coinsPerPage = 10;

  // Fetch top 100 coins only once
  useEffect(() => {
    async function loadData() {
      setLoading(true);

      try {
        const data = await fetchCoins();
        setCoins(data);
        setFilteredCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Search + Sort
  useEffect(() => {
    let temp = [...coins];

    if (search) {
      temp = temp.filter((coin) => {
        const coinName = coin.name.toLowerCase();
        const coinSymbol = coin.symbol.toLowerCase();
        const searchText = search.toLowerCase();

        return coinName.includes(searchText) || coinSymbol.includes(searchText);
      });
    }

    temp.sort((a, b) => {
      if (sortBy === "price") {
        return b.current_price - a.current_price;
      }

      if (sortBy === "change") {
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      }

      return b.market_cap - a.market_cap;
    });

    setFilteredCoins(temp);
  }, [search, sortBy, coins]);

  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  const startIndex = (page - 1) * coinsPerPage;
  const visibleCoins = filteredCoins.slice(
    startIndex,
    startIndex + coinsPerPage
  );

  function handleSearchChange(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
    setPage(1);
  }

  function goToPreviousPage() {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  }

  function goToNextPage() {
    setPage((prevPage) => Math.min(totalPages, prevPage + 1));
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Crypto Market</h1>
        <p className="text-slate-400 mt-1">
          Search and explore the top 100 cryptocurrencies
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search coins..."
          value={search}
          onChange={handleSearchChange}
          className="form-input"
        />

        <select
          value={sortBy}
          onChange={handleSortChange}
          className="form-input"
        >
          <option value="market_cap">Sort by Market Cap</option>
          <option value="price">Sort by Price</option>
          <option value="change">Sort by 24h Change</option>
        </select>
      </div>

      {loading && <p className="text-slate-400">Loading market data...</p>}

      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && (
        <>
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-5 py-3 text-xs text-slate-400">#</th>
                  <th className="px-5 py-3 text-xs text-slate-400">Coin</th>
                  <th className="px-5 py-3 text-xs text-slate-400">Price</th>
                  <th className="px-5 py-3 text-xs text-slate-400">24h</th>
                  <th className="px-5 py-3 text-xs text-slate-400">
                    Market Cap
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleCoins.length > 0 ? (
                  visibleCoins.map((coin) => (
                    <tr key={coin.id} className="border-t border-white/5">
                      <td className="px-5 py-4 text-slate-400">
                        {coin.market_cap_rank}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={coin.image}
                            alt={coin.name}
                            className="w-6 h-6"
                          />
                          <div>
                            <p className="font-semibold">{coin.name}</p>
                            <p className="text-xs text-slate-400 uppercase">
                              {coin.symbol}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4 font-bold">
                        ${coin.current_price.toLocaleString()}
                      </td>

                      <td
                        className={`px-5 py-4 font-bold ${
                          coin.price_change_percentage_24h > 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                      </td>

                      <td className="px-5 py-4">
                        ${coin.market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-5 py-8 text-center text-slate-400"
                    >
                      No coins found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <button
              onClick={goToPreviousPage}
              disabled={page === 1}
              className="secondary-btn disabled:opacity-40"
            >
              Prev
            </button>

            <span className="text-slate-400">
              Page {page} of {totalPages || 1}
            </span>

            <button
              onClick={goToNextPage}
              disabled={page === totalPages || totalPages === 0}
              className="secondary-btn disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Market;