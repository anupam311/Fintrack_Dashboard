const BASE_URL = "https://api.coingecko.com/api/v3";

export async function fetchCoins(page = 1) {
  const url = `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch crypto data");
  }

  return res.json();
}