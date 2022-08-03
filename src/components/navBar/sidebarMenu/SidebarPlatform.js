import { useEffect, useState } from "react";
import useGet from "../../../hooks/useGet";
import SideBarLayout from "./SidebarLayout";

const SidebarPlatform = () => {
  const { data, get } = useGet("platforms/lists/parents");
  console.log("data platforms", data.feedback);
  const [toggleShow, setToggleShow] = useState(false);
  const [text, setText] = useState("Show all");
  const toggleShowhandler = () => {
    setToggleShow((prev) => !prev);
    if (toggleShow) {
      setText("Show all");
    } else {
      setText("Hide");
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-xl font-bold text-white">Platforms</h1>
      {data.feedback &&
        data.feedback.results.slice(0, +3).map((data) => (
          <>
            <SideBarLayout
              link={`/games/${data.id}`}
              buttonText={data.name}
              icon=""
            />
          </>
        ))}

      {toggleShow && (
        <>
          {data.feedback &&
            data.feedback.results.slice(+3).map((data) => (
              <>
                <SideBarLayout
                  link={`/games/${data.id}`}
                  buttonText={data.name}
                  icon=""
                />
              </>
            ))}
        </>
      )}

      <button
        onClick={toggleShowhandler}
        className="inline-flex w-[200px] gap-x-3 items-center text-slate-500"
      >
        <img
          src=""
          alt=""
          className="flex aspect-square w-full max-w-[30px] rounded-md bg-slate-400"
        />
        <p>{text}</p>
      </button>
    </div>
  );
};
export default SidebarPlatform;
