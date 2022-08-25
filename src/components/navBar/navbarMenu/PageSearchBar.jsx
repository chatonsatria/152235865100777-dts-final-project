import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetFilter from "../../../hooks/useGetFilter";
import { DebounceInput } from "react-debounce-input";

const Search = () => {
  const [hover, setHover] = useState(null);
  const [gameId, setGameId] = useState(null);
  const { data, get } = useGetFilter("games");
  const [searchValue, setSearchValue] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const searchFilter = (e) => {
    setSearchValue(e);
  };

  const hoverHandler = (id_plat, id_game) => {
    setHover(id_plat);
    setGameId(id_game);
  };

  useEffect(() => {
    get(`&search=${searchValue}`, "filter");
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <div className="relative flex flex-col w-full">
      <div className="inline-flex gap-x-3 w-full items-center px-8 h-[42px] rounded-md bg-[#3B3B3B] text-[#777777]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.5312 33.3789L25.3867 23.2344C26.9609 21.1992 27.8125 18.7109 27.8125 16.0938C27.8125 12.9609 26.5898 10.0234 24.3789 7.80859C22.168 5.59375 19.2227 4.375 16.0938 4.375C12.9648 4.375 10.0195 5.59766 7.80859 7.80859C5.59375 10.0195 4.375 12.9609 4.375 16.0938C4.375 19.2227 5.59766 22.168 7.80859 24.3789C10.0195 26.5937 12.9609 27.8125 16.0938 27.8125C18.7109 27.8125 21.1953 26.9609 23.2305 25.3906L33.375 35.5312C33.4047 35.561 33.4401 35.5846 33.4789 35.6007C33.5178 35.6168 33.5595 35.6251 33.6016 35.6251C33.6436 35.6251 33.6853 35.6168 33.7242 35.6007C33.7631 35.5846 33.7984 35.561 33.8281 35.5312L35.5312 33.832C35.561 33.8023 35.5846 33.767 35.6007 33.7281C35.6168 33.6892 35.6251 33.6475 35.6251 33.6055C35.6251 33.5634 35.6168 33.5217 35.6007 33.4828C35.5846 33.444 35.561 33.4087 35.5312 33.3789V33.3789ZM22.2813 22.2813C20.625 23.9336 18.4297 24.8438 16.0938 24.8438C13.7578 24.8438 11.5625 23.9336 9.90625 22.2813C8.25391 20.625 7.34375 18.4297 7.34375 16.0938C7.34375 13.7578 8.25391 11.5586 9.90625 9.90625C11.5625 8.25391 13.7578 7.34375 16.0938 7.34375C18.4297 7.34375 20.6289 8.25 22.2813 9.90625C23.9336 11.5625 24.8438 13.7578 24.8438 16.0938C24.8438 18.4297 23.9336 20.6289 22.2813 22.2813Z"
            fill="#777777"
          />
        </svg>
        <DebounceInput
          onMouseEnter={() => setSearchFocus(true)}
          minLength={2}
          debounceTimeout={1000}
          onChange={(event) => searchFilter(event.target.value)}
          className="outline-none flex w-full appearance-none bg-[#3B3B3B]"
        />
      </div>
      {searchFocus && (
        <>
          {data.feedback ? (
            <div
              onMouseLeave={() => setSearchFocus(false)}
              className="absolute z-[105] flex flex-col gap-y-3 bg-[#3B3B3B] w-full p-8 rounded-md mt-14"
            >
              {data.feedback.results.slice(-6).map((data) => (
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
                          <Link to={`/platform/${platforms.platform.slug}`}>
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
                      <button className="text-base text-left font-light hover:text-[#919191] hover:text-lg transition-all">
                        {data.name}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div>Loading</div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
