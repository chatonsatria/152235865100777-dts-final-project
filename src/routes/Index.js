import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/navBar/ProtectedRoute";
import Platforms from "../pages/platforms/Platforms";
import AllGames from "../pages/allGames/AllGames";
import Detail from "../pages/detail/Detail";

const MainNavbar = React.lazy(() => import("../components/navBar/MainNavbar"));
const Home = React.lazy(() => import("../pages/home/Home"));
const MainSideBar = React.lazy(() =>
  import("../components/navBar/MainSidebar")
);

const Index = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#141414] text-white">
      <div className="inline-flex w-full gap-x-4 max-w-7xl mx-auto mt-11 px-8">
        <div className="hidden md:block fixed w-auto h-full">
          <React.Suspense fallback={<p>Loading...</p>}>
            <MainSideBar />
          </React.Suspense>
        </div>
        <div className="md:ml-72 flex flex-col w-full gap-y-8">
          {/* page navbar */}
          <React.Suspense fallback={<p>Loading...</p>}>
            <MainNavbar />
          </React.Suspense>
          {/* router view */}
          <Routes>
            {/* home */}
            <Route
              path="/"
              element={
                <React.Suspense fallback={<p>Loading ...</p>}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route path="/games/:slug" element={<AllGames />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route
              path="/detail/:slug"
              element={
                <ProtectedRoute>
                  <Detail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Index;
