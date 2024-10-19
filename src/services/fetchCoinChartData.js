import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinChartData(
  id,
  currency = "usd",
  interval,
  days = 7
) {
  try {
    const response = await axiosInstance.get(
      `/coins/${id}/market_chart?vs_currency=${currency}&interval=${interval}&days=${days}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
