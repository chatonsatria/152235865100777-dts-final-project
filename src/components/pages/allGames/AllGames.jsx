import { useState } from "react";
import { Link } from "react-router-dom";
import OrderFilter from "../home/OrderFilter";
import PlatformFilter from "../home/PlatformFilter.";
import { SetPageTitle, setDate } from "../../ui/setData";

const AllGame = (props) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col gap-y-11 w-full">
      <div>
        <p className="font-bold text-4xl mb-2 uppercase">
          {SetPageTitle(props.slug)}
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="inline-flex gap-x-4 justify-end">
          <OrderFilter orderSlug={(slug) => props.setSlug(slug)} />
          <PlatformFilter
            platformId={(plat_id) => props.setPlatformId(plat_id)}
          />
        </div>
        {props.data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
            {props.data.results.map((data, key) => (
              <div
                key={key}
                onMouseEnter={() => setSelected(data.id)}
                onMouseLeave={() => setSelected(null)}
                className={`relative flex flex-col w-full md:w-[300px] ${
                  key % 2 !== 0 ? "h-[300px]" : "h-[300px] md:h-[280px]"
                }`}
              >
                <div
                  className={
                    selected === data.id
                      ? "absolute z-[101] scale-105 transition-all w-full md:w-[300px] h-auto bg-[#1b1b1b] rounded-md pb-4"
                      : `transition-all w-full md:w-[300px] ${
                          key % 2 !== 0 ? "h-[300px]" : "h-[300px] md:h-[280px]"
                        } overflow-clip bg-[#1b1b1b] rounded-md`
                  }
                >
                  <img
                    src={data.background_image}
                    alt=""
                    className="flex aspect-video object-cover rounded-t-md"
                  />
                  <div className="px-4 py-4">
                    <div className="inline-flex gap-x-3">
                      {data.parent_platforms.map((platforms, key) => (
                        <img
                          key={key}
                          src={require(`../../../assets/platformsIcon/${platforms.platform.id}.svg`)}
                          alt=""
                          className="w-[20px]"
                        />
                      ))}
                    </div>
                    <Link to={`/detail/${data.slug}`}>
                      <p className="text-2xl font-light">{data.name}</p>
                    </Link>
                    {/* detail */}
                    {selected === data.id && (
                      <div className="flex flex-col gap-y-2 mt-8 text-sm font-extralight">
                        <div className="inline-flex w-full justify-between border-b pb-2">
                          <p>Tanggal rilis:</p>
                          <p>{setDate(data.released)}</p>
                        </div>
                        <div className="inline-flex w-full justify-between border-b pb-2">
                          <p>Genre:</p>
                          <div className="inline-flex gap-x-1">
                            {data.genres.map((genres, key) => (
                              <Link key={key} to={`/games/${genres.slug}`}>
                                <p className="hover:underline">{genres.name}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default AllGame;
