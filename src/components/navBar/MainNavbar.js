import PageSearchBar from "./navbarMenu/PageSearchBar";
import NavLogin from "./navbarMenu/NavLogin";
import NavLogout from "./navbarMenu/NavLogout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { Link } from "react-router-dom";
import PopUpLogout from "../popups/PopUpLogout";
import MainSidebar from "./MainSidebar";
import CustomSideMainLink from "./sidebarMenu/CustomSideMainLink";

const MainNavbar = () => {
  const { token, useremail, logout } = useContext(AuthContext);
  const [wantLogout, setWantLogout] = useState(false);
  const [profileDropDown, setProfileDropdown] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const profile = localStorage.getItem("profile");

  const setDropDown = () => {
    setProfileDropdown((prev) => !prev);
  };

  const setBugerMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  const confirmlogout = () => {
    logout();
    setWantLogout(false);
  };

  // get screen widht
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (windowSize.innerWidth > 768) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [windowSize.innerWidth]);

  return (
    <div className="inline-flex w-full justify-between gap-x-4 items-center">
      {/* main navbar */}
      <div className="inline-flex w-full">
        <PageSearchBar />
      </div>
      {/* login dll */}
      <div className="inline-flex gap-x-2 text-white">
        {!token && isHide && <NavLogin />}
        <div className="hidden md:block">
          {token && isHide && (
            <div className="relative inline-flex items-center gap-x-4">
              {/* profile pict */}
              <img
                src={profile}
                alt=""
                className="w-11 h-11 aspect-square rounded-full object-cover bg-slate-400"
              />
              {/* dropdown menu */}
              <button onClick={setDropDown}>
                <svg
                  className={
                    profileDropDown
                      ? "rotate-180 transition-all duration-100 cursor-pointer"
                      : "transition-all duration-100 cursor-pointer"
                  }
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92907 7.07973L13.968 0.645906C13.9838 0.633879 13.9946 0.616512 13.9985 0.59707C14.0023 0.577628 13.9989 0.557451 13.9889 0.540332C13.9789 0.523213 13.963 0.510332 13.9442 0.50411C13.9254 0.497888 13.905 0.498754 13.8867 0.506546H0.113253C0.0950305 0.498754 0.0745892 0.497888 0.0557726 0.50411C0.0369559 0.510332 0.0210601 0.523213 0.011074 0.540332C0.001088 0.557451 -0.0023004 0.577628 0.00154573 0.59707C0.00539187 0.616512 0.0162077 0.633879 0.0319596 0.645906L6.07093 7.07973C6.19034 7.20627 6.33434 7.30707 6.4941 7.37597C6.65386 7.44487 6.82602 7.48041 7 7.48041C7.17398 7.48041 7.34614 7.44487 7.5059 7.37597C7.66566 7.30707 7.80966 7.20627 7.92907 7.07973Z"
                    fill="white"
                  />
                </svg>
              </button>
              <section className="hidden z-[105] md:block absolute mt-40 right-0 text-black">
                {profileDropDown && (
                  <div className="flex flex-col gap-y-2 w-[130px] h-auto bg-[#3B3B3B] rounded-sm p-4">
                    <Link to={"/profile"}>
                      <button className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="ml-3 text-white">Profile</p>
                      </button>
                    </Link>

                    <div className="inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1 md:mr-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <NavLogout wantLogout={() => setWantLogout(true)} />
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
        <div className="md:hidden">
          {/* burger menu */}
          <button
            onClick={setBugerMenu}
            className="flex flex-col gap-y-1 bg-[#3B3B3B] h-[42px] w-[42px] rounded-md justify-center items-center"
          >
            <div
              className={
                isBurgerOpen
                  ? "w-5 h-[2px] bg-[#777777] rotate-45 translate-y-[6px] transition-all duration-100"
                  : "w-5 h-[2px] bg-[#777777] transition-all duration-100"
              }
            ></div>
            <div
              className={
                isBurgerOpen
                  ? "w-5 h-[2px] bg-[#3B3B3B] translate-x-[10px] transition-all duration-100"
                  : "w-5 h-[2px] bg-[#777777] transition-all duration-100"
              }
            ></div>
            <div
              className={
                isBurgerOpen
                  ? "w-5 h-[2px] bg-[#777777] -rotate-45 -translate-y-[6px] transition-all duration-100"
                  : "w-5 h-[2px] bg-[#777777] transition-all duration-100"
              }
            ></div>
          </button>

          <div
            className={`${
              isBurgerOpen
                ? "absolute z-[105] flex flex-col gap-y-3 bg-[#3B3B3B] rounded-sm w-full right-0 p-4 mt-6 transition-all"
                : "absolute z-[105] flex flex-col gap-y-3 bg-[#3B3B3B] rounded-sm w-full right-0 p-4 mt-6 translate-x-[1000px] opacity-0 transition-all"
            }`}
          >
            {/* !auth */}
            {!token && <NavLogin />}
            {/* auth profile dropdown */}
            {token && (
              <div className="flex flex-col w-full h-auto items-center gap-y-3 text-black">
                {/* profile pict */}
                <img
                  src={profile}
                  alt=""
                  className="w-11 h-11 aspect-square rounded-full object-cover bg-slate-400"
                />
                <p className="text-white font-semibold text-lg">{useremail}</p>
                <div className="inline-flex justify-center gap-x-3 w-full items-center">
                  <Link to={"/profile"}>
                    <button className="text-white">Profile</button>
                  </Link>
                  <p className="text-white">{" • "}</p>
                  <NavLogout wantLogout={() => setWantLogout(true)} />
                </div>
              </div>
            )}
            {/* menus */}
            <div className="inline-flex gap-x-4 justify-center">
              <CustomSideMainLink to={"/"}>Home</CustomSideMainLink>
              <CustomSideMainLink to={"/games/all"}>
                All Games
              </CustomSideMainLink>
            </div>
          </div>
        </div>
      </div>
      {wantLogout && (
        <PopUpLogout
          display={wantLogout}
          close={() => setWantLogout(false)}
          logout={confirmlogout}
        />
      )}
    </div>
  );
};

export default MainNavbar;
