import { useState } from "react";
import CustomLink from "../CustomLink";

const NavHome = () => {
  const [open, setOpen] = useState(false);
  const dropdownHanlder = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative flex w-auto h-auto">
      <button onMouseEnter={dropdownHanlder} className="text-white">
        STORE
      </button>
      {open && (
        <div className="absolute left-0" onMouseLeave={dropdownHanlder}>
          <div className="h-[20px]" />
          <div className="flex flex-col gap-y-2 bg-white py-2 pl-4 pr-8 border">
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/wishlist"}>Wishlist</CustomLink>
            <CustomLink to={"/points"}>Points</CustomLink>
            <CustomLink to={"/news"}>News</CustomLink>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavHome;
