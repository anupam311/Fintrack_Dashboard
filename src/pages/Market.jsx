import { useEffect, useState } from "react";
import { fetchCoins } from "../services/cryptoApi";

function Market() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchCoins();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Crypto Market
        </h1>
        <p className="text-slate-400 mt-1">
          Live data from CoinGecko API
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-slate-400">Loading market data...</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-400">{error}</p>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="glass-card rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr>
                <th className="px-5 py-3 text-xs text-slate-400">#</th>
                <th className="px-5 py-3 text-xs text-slate-400">Coin</th>
                <th className="px-5 py-3 text-xs text-slate-400">Price</th>
                <th className="px-5 py-3 text-xs text-slate-400">24h</th>
                <th className="px-5 py-3 text-xs text-slate-400">Market Cap</th>
              </tr>
            </thead>

            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id} className="border-t border-white/5">
                  <td className="px-5 py-4 text-slate-400">
                    {coin.market_cap_rank}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                      <span className="font-semibold">
                        {coin.name}
                      </span>
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Market;