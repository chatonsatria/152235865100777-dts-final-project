import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetFilter from "../../hooks/useGetFilter";
import DetailGames from "../../components/pages/detailGames/DetailGames";

const Detail = () => {
  const { slug } = useParams();
  const { data, get } = useGetFilter(`games/${slug}`);
  const { data: dataPhotos, get: getPhotos } = useGetFilter("games");
  console.log("data from get filter", data.feedback);
  const [reGetData, setReGetData] = useState("");
  const reGetHandler = () => {
    setReGetData(slug);
  };

  useEffect(() => {
    get("", "slug");
    getPhotos(`/${slug}/screenshots`, "slug");
  }, [reGetData]);

  useEffect(() => {
    reGetHandler();
  }, [slug]);

  return (
    <div className="flex fex-col w-full">
      <DetailGames data={data.feedback} photos={dataPhotos.feedback} />
    </div>
  );
};

export default Detail;
