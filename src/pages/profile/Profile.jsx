import ProfilePictList from "../../components/pages/profile/ProfilePictureList";

const Profile = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#141414]">
      <div className="flex flex-col gap-y-14 w-full h-auto items-center justify-center">
        {/* profile image choose */}
        <ProfilePictList />
      </div>
    </div>
  );
};

export default Profile;
