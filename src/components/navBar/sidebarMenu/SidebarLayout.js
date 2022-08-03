import CustomSideSubLink from "./CustomSideSubLink";

const SideBarLayout = (props) => {
  return (
    <CustomSideSubLink to={props.link}>
      <button className="inline-flex w-[200px] gap-x-3 items-center">
        <div className="flex aspect-square w-full max-w-[30px] rounded-md bg-slate-400" />
        <p>{props.buttonText}</p>
      </button>
    </CustomSideSubLink>
  );
};
export default SideBarLayout;
