import SideBarLayout from "./SidebarLayout";

const SidebarNewRelease = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-xl font-bold text-white">New Releases</h1>
      <SideBarLayout link="/last-30-days" buttonText="Last 30 days" icon="" />
      <SideBarLayout link="/this-week" buttonText="This Week" icon="" />
      <SideBarLayout link="/next-week" buttonText="Next week" icon="" />
      <SideBarLayout
        link="/video-game-releases"
        buttonText="Release calendar"
        icon=""
      />
    </div>
  );
};
export default SidebarNewRelease;
