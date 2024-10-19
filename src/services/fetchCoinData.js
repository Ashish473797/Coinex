import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(currency = "usd", page = 1) {
  const perPage = 20;
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}$order=market_cap_desc`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
