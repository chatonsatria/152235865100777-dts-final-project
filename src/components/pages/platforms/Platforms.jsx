import { Link } from "react-router-dom";

const PlatformsComp = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
      {props.data &&
        props.data.results.map((data, index) => (
          <div
            key={index}
            className={`relative flex w-full md:w-[300px] h-[300px] overflow-clip bg-[#1b1b1b] rounded-md`}
          >
            <img
              src={data.image_background}
              alt=""
              className="w-full object-cover"
            />
            <div className="absolute z-[101] flex flex-col gap-y-2 justify-center items-center w-full h-full bg-black opacity-60">
              <div className="flex px-4 py-1.5 bg-white opacity-80 rounded-md">
                <p className="text-black opacity-100 font-semibold">
                  {data.name}
                </p>
              </div>
              <div className="flex flex-col text-center w-[240px]">
                {data.games.map((games, index) => (
                  <p
                    className={`${
                      index < data.games.length - 1 ? "border-b-2" : ""
                    } pb-2`}
                  >
                    <Link to={`/detail/${games.slug}`}>{games.name}</Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlatformsComp;
