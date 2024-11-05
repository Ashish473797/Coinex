/* eslint-disable react-hooks/exhaustive-deps */
import debounce from "lodash.debounce";
import { Link, useNavigate } from "react-router-dom";
import store from "../../zustand/store";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useMemo } from "react";
import { fetchSearchedCoin } from "../../services/fetchSearchedCoin";

export default function Navbar() {
  const navigate = useNavigate();
  
  const { setCurrency } = store();
  const { currency } = store();
  
  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchList, setSearchList] = useState([]);
  
  // const [isFocused, setIsFocused] = useState(false);
  
  const debouncedFetch = useMemo(
    () =>
      debounce((term) => {
        refetch({ queryKey: ["searchData", term] });
      }, 300),
    []
  );

  const { isError, error, isLoading, data, refetch } = useQuery({
    queryKey: ["searchData", searchedTerm],
    queryFn: () => fetchSearchedCoin(searchedTerm),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
    enabled: false,
  });

  useEffect(() => {
    if (data) {
      setSearchList(data?.coins);
    }
  }, [data]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchedTerm(term);
    debouncedFetch(term);
  };

  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  if (isError) {
    console.error(error);
  }

  function handleCoinRedirect(coinId) {
    navigate(`/details/${coinId}`);
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => setCurrency("usd")}>
              <button className={currency === "usd" ? "active" : ""}>
                USD
              </button>
            </li>
            <li onClick={() => setCurrency("inr")}>
              <button className={currency === "inr" ? "active" : ""}>
                INR
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-xl btn btn-ghost">
          Coinex
        </Link>
      </div>
      <div className="navbar-end">
        <div className="relative form-control">
          <input
            type="text"
            placeholder="Search"
            value={searchedTerm}
            onChange={handleSearchChange}
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            className="input input-bordered md:w-auto;"
          />
          {isLoading && (
            <div className="absolute w-full top-[64px] px-4 py-3 bg-[#282A36] rounded-md">
              <p className="text-slate-400">Loading...</p>
            </div>
          )}
          {searchList.length > 0 && (
            <div className="overflow-y-auto overflow-x-hidden absolute w-full h-[400px] top-[64px] px-4 py-3 bg-[#282A36] rounded-md z-10">
              <ul className="text-slate-400">
                {searchList.map((coin) => (
                  <li
                    key={coin.id}
                    className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-700"
                    onClick={() => handleCoinRedirect(coin?.id)}
                  >
                    <img
                      src={coin.thumb}
                      alt={coin.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">{coin.name}</p>
                      <p className="text-xs text-gray-400">
                        Symbol: {coin.symbol.toUpperCase()}
                      </p>
                      {coin.market_cap_rank && (
                        <p className="text-xs text-gray-400">
                          Rank: {coin.market_cap_rank}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
