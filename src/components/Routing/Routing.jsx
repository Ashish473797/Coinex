import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../../pages/Layout";
import CoinDetailsLoader from "../Loaders/CoinDetailsLoader";
import HomeLoader from "../Loaders/HomeLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetails = lazy(() => import("../../pages/CoinDetails"));

export default function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<HomeLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/details/:coinId"
            element={
              <Suspense fallback={<CoinDetailsLoader />}>
                <CoinDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}
