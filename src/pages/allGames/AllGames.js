import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetFilter from "../../hooks/useGetFilter";
import AllGame from "../../components/pages/allGames/AllGames";

const AllGames = () => {
  const { slug } = useParams();
  const { data, get } = useGetFilter("games");
  const [reGetData, setReGetData] = useState("");
  const reGetHandler = () => {
    setReGetData(slug);
  };

  const [platformId, setPlatformId] = useState();
  const [slugFilter, setSlugFilter] = useState();

  console.log(platformId);
  console.log(slugFilter);

  useEffect(() => {
    if (slug !== "all") {
      get(`&platforms=${slug}`, "filter");
    } else {
      get();
    }
  }, [reGetData]);

  useEffect(() => {
    if (platformId && slugFilter) {
      get(`&parent_platforms=${platformId}&ordering=${slugFilter}`, "filter");
    } else if (platformId) {
      get(`&parent_platforms=${platformId}`, "filter");
    } else {
      get(`&ordering=${slugFilter}`, "filter");
    }
  }, [platformId, slugFilter]);

  useEffect(() => {
    reGetHandler();
  }, [slug]);

  return (
    <div className="flex fex-col w-full">
      <AllGame
        data={data.feedback}
        slug={slug}
        setPlatformId={(id) => setPlatformId(id)}
        setSlug={(slug) => setSlugFilter(slug)}
      />
    </div>
  );
};

export default AllGames;
