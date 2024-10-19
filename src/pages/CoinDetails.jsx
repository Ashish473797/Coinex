import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import store from "../zustand/store";
import parse from "html-react-parser";
import CoinDetailsLoader from "../components/Loaders/CoinDetailsLoader";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";

export default function CoinDetails() {

  const { coinId } = useParams();
  const { currency } = store();

  const {
    data: coin,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["coinDetails", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isError) {
    console.error(error);
    return <div>Error loading data</div>;
  }

  return (
    <>
      {isLoading ? (
        <CoinDetailsLoader />
      ) : (
        <div className="flex flex-col md:flex-row">
          {/* right section  */}
          <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
            <img
              src={coin?.image?.large}
              className="h-52 mb-5"
              loading="eager"
              alt={coin?.name}
            />
            <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>
            <p className="w-full px-6 py-4 text-justify">
              {coin && parse(coin.description?.en)}
            </p>
            <div className="w-full flex flex-col md:flex-row md:justify-between px-6">
              <div className="flex items-center mb-4  md:mb-0">
                <h2 className="text-xl font-bold">Rank</h2>
                <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>
              </div>
              <div className="flex items-center mb-4  md:mb-0">
                <h2 className="text-xl font-bold text-yellow-400">
                  Current Price
                </h2>
                <span className="ml-3 text-xl">
                  {coin?.market_data?.current_price[currency]}
                </span>
              </div>
            </div>
          </div>

          {/* left section  */}
          <div className="md:w-2/3 w-full p-6">
            <CoinInfoContainer coinId={"bitcoin"} />
          </div>
        </div>
      )}
    </>
  );
}
