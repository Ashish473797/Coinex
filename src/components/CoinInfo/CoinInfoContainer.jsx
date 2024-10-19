/* eslint-disable react/prop-types */
import CoinInfo from "./CoinInfo";
import CoinChartLoader from "../Loaders/CoinChartLoader";
import useCoinChartData from "../../hooks/useCoinChartData";

export default function CoinInfoContainer({ coinId }) {
  const [
    chartData,
    isError,
    error,
    isLoading,
    setDays,
    days,
    setInterval,
    interval,
    currency,
  ] = useCoinChartData(coinId);

  console.log()

  if (isError) {
    console.error(error);
    return <div>Error loading data</div>;
  }

  if (isLoading) {
    return <CoinChartLoader />;
  }

  return (
    <CoinInfo
      chartData={chartData}
      setInterval={setInterval}
      interval={interval}
      setDays={setDays}
      days={days}
      currency={currency}
    />
  );
}
