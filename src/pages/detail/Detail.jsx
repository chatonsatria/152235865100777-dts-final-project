import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetFilter from "../../hooks/useGetFilter";
import DetailGames from "../../components/pages/detailGames/DetailGames";

const Detail = () => {
  const { slug } = useParams();
  const { data, get } = useGetFilter(`games/${slug}`);
  const { data: dataPhotos, get: getPhotos } = useGetFilter("games");
  const [reGetData, setReGetData] = useState("");

  useEffect(() => {
    get("", "slug");
    getPhotos(`/${slug}/screenshots`, "slug");
    // eslint-disable-next-line
  }, [reGetData, slug]);

  useEffect(() => {
    const reGetHandler = () => {
      setReGetData(slug);
    };
    reGetHandler();
  }, [slug]);

  return (
    <div className="flex fex-col w-full">
      <DetailGames data={data.feedback} photos={dataPhotos.feedback} />
    </div>
  );
};

export default Detail;
