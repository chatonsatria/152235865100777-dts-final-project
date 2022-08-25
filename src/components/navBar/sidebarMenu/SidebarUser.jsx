import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import SideBarLayout from "./SidebarLayout";

const SidebarUser = () => {
  const { useremail } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-y-3 text-white">
      <h1 className="text-lg font-bold">{useremail}</h1>

      <SideBarLayout link="/wishlist" buttonText="Wishlist" icon="" />
      <SideBarLayout link="/my-library" buttonText="My library" icon="" />
      <SideBarLayout link="/friends" buttonText="People you follow" icon="" />
    </div>
  );
};
export default SidebarUser;
