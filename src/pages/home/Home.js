import { useEffect, useState } from "react";
import HomeContent from "../../components/pages/home/Home";
import OrderFilter from "../../components/pages/home/OrderFilter";
import PlatformFilter from "../../components/pages/home/PlatformFilter.";
import useGetFilter from "../../hooks/useGetFilter";

const Home = () => {
  const { data, get } = useGetFilter("games");

  const [platformId, setPlatformId] = useState();
  const [slug, setSlug] = useState();

  useEffect(() => {
    if (platformId && slug) {
      get(`&parent_platforms=${platformId}&ordering=${slug}`, "filter");
    } else if (platformId) {
      get(`&parent_platforms=${platformId}`, "filter");
    } else {
      get(`&ordering=${slug}`, "filter");
    }
  }, [platformId, slug]);

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="flex flex-col gap-y-11 w-full">
      {/* home title */}
      <div>
        <p className="font-bold text-7xl mb-2">Top Picks</p>
        <p>Based on your ratings</p>
      </div>
      <div className="flex flex-col gap-y-3">
        {/* filter */}
        <div className="inline-flex gap-x-4 justify-end">
          <OrderFilter orderSlug={(slug) => setSlug(slug)} />
          <PlatformFilter platformId={(plat_id) => setPlatformId(plat_id)} />
        </div>
        {/* content */}
        <div className="flex w-full h-auto">
          <HomeContent data={data.feedback} />
        </div>
      </div>
    </div>
  );
};

export default Home;
