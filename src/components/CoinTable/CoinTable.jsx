import { useState, useEffect, useCallback } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import store from "../../zustand/store";
import CoinRowsLoader from "../Loaders/CoinRowsLoader";

export default function CoinTable() {
  const { currency } = store();
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(currency, page),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data) {
      setCoins((prevCoins) => [...prevCoins, ...data]);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  if (isError) {
    console.error(error);
    return <div>Error loading data</div>;
  }

  function handleCoinRedirect(coinId) {
    navigate(`/details/${coinId}`);
  }

  const Footer = () => {
    return <CoinRowsLoader />;
  };

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 container mx-auto">
        {/* header  */}
        <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-between">
          <div className="basis-[40%]">Coin</div>
          <div className="basis-[20%]">Price</div>
          <div className="basis-[25%] flex justify-center">24h Change</div>
          <div className="basis-[15%] flex justify-end">Market Cap</div>
        </div>
        {/* body  */}
        {isLoading && page === 1 && <CoinRowsLoader />}{" "}
        <div className="flex flex-col w-full">
          <Virtuoso
            style={{ height: "100vh" }}
            useWindowScroll
            data={coins}
            endReached={loadMore}
            increaseViewportBy={200}
            itemContent={(index, coin) => {
              return (
                <div
                  key={coin?.id}
                  onClick={() => handleCoinRedirect(coin?.id)}
                  className="w-full text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center justify-start gap-4 basis-[40%]">
                    <div className="w-[5rem] h-[5rem]">
                      <img
                        src={coin?.image}
                        className="w-full h-full"
                        alt="coin"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">{coin?.name}</h2>
                      <p>{coin?.symbol}</p>
                    </div>
                  </div>
                  <div className="basis-[20%]">
                    <h2>{coin?.current_price}</h2>
                  </div>
                  <div className="basis-[25%] flex justify-center">
                    <h2>{coin?.price_change_24h}</h2>
                  </div>
                  <div className="basis-[15%] flex justify-end">
                    <h2>{coin?.market_cap}</h2>
                  </div>
                </div>
              );
            }}
            components={{ Footer }}
          />
        </div>
      </div>
    </>
  );
}
