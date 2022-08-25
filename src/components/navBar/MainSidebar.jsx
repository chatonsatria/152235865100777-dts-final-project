import SidebarAllGames from "./sidebarMenu/SidebarAllGames";
import SidebarBrowse from "./sidebarMenu/SidebarBrowse";
import SidebarGenres from "./sidebarMenu/SidebarGenres";
import SidebarHome from "./sidebarMenu/SidebarHome";
import SidebarPlatform from "./sidebarMenu/SidebarPlatform";

const MainSidebar = () => {
  return (
    <div className="flex flex-col gap-y-11">
      <p className="text-center font-semibold text-2xl">R A W R</p>
      <div className="flex flex-col gap-y-8 h-screen overflow-y-auto scrollbar-hide pb-60">
        {/* sidebar home */}
        <SidebarHome />
        {/* sidebar all games */}
        <SidebarAllGames />
        {/* sidebar browser */}
        <SidebarBrowse />
        {/* sidebar platforms */}
        <SidebarPlatform />
        {/* sidebar genres */}
        <SidebarGenres />
      </div>
    </div>
  );
};

export default MainSidebar;
