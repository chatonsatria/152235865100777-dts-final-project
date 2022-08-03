import Carousel from "better-react-carousel";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetFilter from "../../../hooks/useGetFilter";

const Detail = (props) => {
  const { slug } = useParams();
  console.log("SLUGG", slug);
  const { data, get } = useGetFilter("games");
  console.log("DATA DETAIL SIMILIAR", data.feedback);
  console.log(data.feedback);
  const [selected, setSelected] = useState(null);
  const setDate = (date) => {
    const newDate = new Date(date);
    const localDate = newDate.toLocaleString("id-ID", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return localDate;
  };

  const [hover, setHover] = useState(null);
  const [gameId, setGameId] = useState(null);

  const hoverHandler = (id_plat, id_game) => {
    setHover(id_plat);
    setGameId(id_game);
  };

  function createMarkUp(data) {
    return { __html: data };
  }

  const [slugTemp, setSlugTemp] = useState("");

  useEffect(() => {
    if (props.data) {
      let genres = "";
      props.data.genres.slice(-1).forEach((data) => {
        genres = data.slug;
        setSlugTemp(data.slug);
        console.log("genres", genres);
      });
      setTimeout(() => {
        get(`&genres=${genres}`, "filter");
      }, 2000);
    }
  }, [props.data, slug]);

  return (
    <div className="w-full min-h-screen py-11">
      {props.data && props.photos ? (
        <div className="flex flex-row gap-x-4 w-full">
          {/* first segment */}
          <div className="flex flex-col gap-y-8 w-[60%]">
            {/* game name and icon */}
            <div className="inline-flex justify-between items-center w-full">
              <p className="text-3xl font-semibold">
                {props.data.name_original}
              </p>
              <div className="inline-flex gap-x-3 mt-2">
                {props.data.parent_platforms.map((platforms, index) => (
                  <img
                    src={require(`../../../assets/platformsIcon/${platforms.platform.id}.svg`)}
                    alt=""
                    className="w-[20px]"
                    key={index}
                  />
                ))}
              </div>
            </div>
            {/* game images */}
            <Carousel
              scrollSnap={true}
              cols={1}
              rows={1}
              gap={10}
              loop={true}
              autoplay={5000}
              containerClassName="flex w-full h-[290px] px-2"
              arrowLeft={
                <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-0 rounded-l-sm bg-[#2c2c2c] bg-opacity-50">
                  <svg
                    className="rotate-180"
                    width="20"
                    height="34"
                    viewBox="0 0 20 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              }
              arrowRight={
                <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-0 rounded-r-sm bg-[#2c2c2c] bg-opacity-30">
                  <svg
                    width="20"
                    height="34"
                    viewBox="0 0 20 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              }
            >
              {/* loop here */}
              {props.photos.results.map((photo) => (
                <Carousel.Item key={photo.id} className="w-full h-[400px]">
                  <img
                    src={photo.image}
                    alt=""
                    className="w-full object-cover h-full"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            {/* game genres */}
            <div className="inline-flex gap-x-4">
              {props.data.genres.map((genres, index) => (
                <>
                  <p key={index}>{genres.name}</p>
                  <p>{index < props.data.genres.length - 1 ? " • " : ""}</p>
                </>
              ))}
            </div>
            {/* game desc */}
            <div
              dangerouslySetInnerHTML={createMarkUp(props.data.description)}
            />
          </div>
          {/* second segment */}
          <div className="flex flex-col gap-y-8 pl-8 w-[40%]">
            {/* galeries with modal hover */}
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold text-lg">IMAGES</p>
              <div className="grid grid-cols-2 gap-2 w-full h-auto">
                {props.photos.results.map((photo) => (
                  <img src={photo.image} alt="" className="rounded-sm" />
                ))}
              </div>
            </div>
            {/* similar */}
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold text-lg">SIMILIAR</p>
              {data.feedback &&
                data.feedback.results.slice(-6).map((data) => (
                  <Link to={`/detail/${data.slug}`} className="w-full">
                    <div
                      key={data.id}
                      className="inline-flex gap-x-4 items-center bg-[#2c2c2c] px-4 py-2 rounded-lg hover:scale-[1.02] transition-all w-full"
                    >
                      <img
                        src={data.background_image}
                        alt=""
                        className="w-[62px] aspect-square object-cover"
                      />
                      <div className="flex flex-col gap-y-1">
                        <div className="inline-flex gap-x-3">
                          {/* if some data null or undefined use "?" */}
                          {data?.parent_platforms?.map((platforms) => (
                            <Link to={`/platform/${platforms.platform.id}`}>
                              <img
                                onMouseEnter={() =>
                                  hoverHandler(platforms.platform.id, data.id)
                                }
                                onMouseLeave={() => hoverHandler(null, null)}
                                src={require(`../../../assets/platformsIcon/${platforms.platform.id}.svg`)}
                                alt=""
                                className={`w-[14px] transition-all ${
                                  hover === platforms.platform.id &&
                                  gameId === data.id
                                    ? "scale-150"
                                    : "scale-100"
                                }`}
                              />
                            </Link>
                          ))}
                        </div>
                        <button className="text-sm font-light w-[200px] text-left hover:text-[#919191] transition-all truncate">
                          {data.name}
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              <Link to={`/games/${slugTemp}`}>
                <button className="flex w-full justify-center px-4 py-1.5 rounded-md bg-[#2c2c2c]">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Detail;
