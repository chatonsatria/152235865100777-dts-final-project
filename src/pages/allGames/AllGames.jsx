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

  useEffect(() => {
    if (slug !== "all") {
      get(`&genres=${slug}`, "filter");
    } else {
      get();
    }
    // eslint-disable-next-line
  }, [reGetData]);

  useEffect(() => {
    if (platformId && slugFilter) {
      get(`&parent_platforms=${platformId}&ordering=${slugFilter}`, "filter");
    } else if (platformId) {
      get(`&parent_platforms=${platformId}`, "filter");
    } else {
      get(`&ordering=${slugFilter}`, "filter");
    }
    // eslint-disable-next-line
  }, [platformId, slugFilter]);

  useEffect(() => {
    reGetHandler();
    // eslint-disable-next-line
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
