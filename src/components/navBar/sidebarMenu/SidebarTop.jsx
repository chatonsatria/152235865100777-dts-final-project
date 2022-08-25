import SideBarLayout from "./SidebarLayout";

const SidebarTop = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-xl font-bold text-white">Top</h1>
      <SideBarLayout
        link="/best-of-the-year"
        buttonText="Best of the year"
        icon=""
      />
      <SideBarLayout
        link="/Popular-in-2021"
        buttonText="Popular in 2021"
        icon=""
      />
      <SideBarLayout
        link="/all-time-top-250"
        buttonText="All time top 250"
        icon=""
      />
    </div>
  );
};
export default SidebarTop;
