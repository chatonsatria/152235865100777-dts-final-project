import { useState } from "react";
import SideBarLayout from "./SidebarLayout";

const SidebarGenres = () => {
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
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-xl font-bold text-white">Genres</h1>
      <SideBarLayout link="/games/action" buttonText="Action" icon="" />
      <SideBarLayout link="/games/strategy" buttonText="Strategy" icon="" />
      {toggleShow && (
        <div className="flex flex-col gap-y-3">
          <SideBarLayout
            link="/games/role-playing-games-rpg"
            buttonText="RPG"
            icon=""
          />
          <SideBarLayout link="/games/shooter" buttonText="Shooter" icon="" />
          <SideBarLayout
            link="/games/adventure"
            buttonText="Adventure"
            icon=""
          />
          <SideBarLayout link="/games/puzzle" buttonText="Puzzle" icon="" />
          <SideBarLayout link="/games/racing" buttonText="Racing" icon="" />
          <SideBarLayout link="/games/sports" buttonText="Sports" icon="" />
        </div>
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
export default SidebarGenres;
