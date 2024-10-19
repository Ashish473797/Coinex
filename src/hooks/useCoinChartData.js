import { fetchCoinChartData } from "../services/fetchCoinChartData";
import { useQuery } from "@tanstack/react-query";
import store from "../zustand/store";
import { useState } from "react";

function useCoinChartData(coinId) {
  const { currency } = store();

  const [interval, setInterval] = useState("");
  const [days, setDays] = useState(7);

  const {
    isError,
    error,
    isLoading,
    data: chartData,
  } = useQuery({
    queryKey: ["chartData", coinId, currency, interval, days],
    queryFn: () => fetchCoinChartData(coinId, currency, interval, days),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  return [
    chartData,
    isError,
    error,
    isLoading,
    setDays,
    days,
    setInterval,
    interval,
    currency,
  ];
}

export default useCoinChartData;
