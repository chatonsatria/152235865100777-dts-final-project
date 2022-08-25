import { useState } from "react";
import SideBarLayout from "./SidebarLayout";

const SidebarBrowse = () => {
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
      <h1 className="text-xl font-bold text-white">Browse</h1>
      <SideBarLayout link="/platforms" buttonText="Platforms" icon="" />
      <SideBarLayout link="/stores" buttonText="Stores" icon="" />
      <SideBarLayout link="/collections" buttonText="Collections" icon="" />
      {toggleShow && (
        <div className="flex flex-col gap-y-3">
          <SideBarLayout link="/reviews" buttonText="Reviews" icon="" />
          <SideBarLayout link="/genres" buttonText="Genres" icon="" />
          <SideBarLayout link="/creators" buttonText="Creators" icon="" />
          <SideBarLayout link="/tags" buttonText="Tags" icon="" />
          <SideBarLayout link="/developers" buttonText="Developers" icon="" />
          <SideBarLayout link="/publishers" buttonText="Publishers" icon="" />
        </div>
      )}
      <button
        onClick={toggleShowhandler}
        className="inline-flex w-[200px] gap-x-3 items-center text-slate-500"
      >
        <div className="flex aspect-square w-full max-w-[30px] rounded-md bg-slate-800" />
        <p>{text}</p>
      </button>
    </div>
  );
};
export default SidebarBrowse;
