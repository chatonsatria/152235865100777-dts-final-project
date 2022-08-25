import { useState } from "react";
import CustomLink from "../CustomLink";

const NavCommunity = () => {
  const [open, setOpen] = useState(false);
  const dropdownHanlder = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative flex w-auto h-auto">
      <button onMouseEnter={dropdownHanlder} className="text-white">
        COMMUNITY
      </button>
      {open && (
        <div className="absolute left-0" onMouseLeave={dropdownHanlder}>
          <div className="h-[20px]" />
          <div className="flex flex-col gap-y-2 bg-white py-2 pl-4 pr-8 border">
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/discussions"}>Discussions</CustomLink>
            <CustomLink to={"/workshop"}>Workshop</CustomLink>
            <CustomLink to={"/market"}>Market</CustomLink>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavCommunity;
