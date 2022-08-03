import { useContext, useState } from "react";
import { AuthContext } from "../../../store/auth-context";
import PopupChangeProfile from "../../popups/PopUpChange";
import PopupChangeSuccess from "../../popups/PopUpChangeSuccess";

const ProfilePictList = () => {
  const { useremail } = useContext(AuthContext);
  const [isChange, setIsChange] = useState(false);
  const [isChangeSuccess, setIsChangeSuccess] = useState(false);
  const [data, setData] = useState();
  const imageData = localStorage.getItem("profile");

  // first image
  const [firstImagePreview, setFirstImagePreview] = useState("");

  // base64 image
  async function fileBase64(image) {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onerror = reject;
      fileReader.onload = function () {
        setData(fileReader.result);
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(image);
    });
  }
  // read file input
  const readFile = async (event) => {
    let imageUrl = {
      [event.target.name]: URL.createObjectURL(event.target.files[0]),
    };
    await fileBase64(event.target.files[0]);
    setFirstImagePreview(imageUrl.photo);
    setTimeout(() => {
      setIsChange(true);
    }, 3000);
  };

  const confirmHandler = () => {
    setIsChange(false);
    setProfileHandler(data);
  };
  const setProfileHandler = (data) => {
    setIsChangeSuccess(true);
    localStorage.setItem("profile", data);
    setTimeout(() => {
      setIsChangeSuccess(false);
    }, 3000);
  };
  return (
    <div className="flex flex-col gap-y-3">
      <label
        htmlFor="upload-image-1"
        className="flex flex-col gap-y-3 items-center"
      >
        {firstImagePreview && (
          <img
            src={firstImagePreview}
            alt=""
            className="w-[100px] h-[100px] aspect-square rounded-full object-cover"
          />
        )}
        {!firstImagePreview && (
          <img
            src={imageData}
            alt=""
            className="w-[100px] h-[100px] aspect-square rounded-full object-cover bg-[#777777]"
          />
        )}
        <p className="text-white text-lg font-semibold text-center">
          {useremail}
        </p>
        <div className="cursor-pointer flex w-[301px] h-[51px] bg-[#777777] rounded-md border border-[#808080]">
          <p className="m-auto text-xl">CHANGE PROFILE PICTURE</p>
        </div>
      </label>
      <input
        onChange={(event) => readFile(event, "gambar 1")}
        type="file"
        name="photo"
        id="upload-image-1"
        hidden
      />
      {isChange && (
        <PopupChangeProfile
          display={isChange}
          close={() => setIsChange(false)}
          confirm={confirmHandler}
        />
      )}
      {isChangeSuccess && <PopupChangeSuccess display={isChangeSuccess} />}
    </div>
  );
};

export default ProfilePictList;
