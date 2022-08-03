import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterFormInput from "../../components/auth/register/FormInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../store/auth-context";

const Register = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  const [isFailed, setIsFailed] = useState(false);

  const authDataHandler = (token, useremail) => {
    setLogin(token, useremail);
    localStorage.setItem("token", token);
    localStorage.setItem("useremail", useremail);
    setTimeout(() => {
      navigate("/dts-movies/home");
    }, 3000);
  };

  const handleSubmit = async (emailData, passwordData) => {
    const email = emailData;
    const password = passwordData;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      authDataHandler(user.accessToken, user.email);
    } catch (error) {
      setIsFailed(true);
    }
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
    <div className="relative flex flex-col md:flex-row w-full min-h-screen bg-black text-white">
      <div className="absolute w-full h-full bg-gradient-to-r from-[#141414] via-[#141414]">
        <div className="flex flex-row-reverse w-full h-full justify-center md:justify-end items-center md:pl-36">
          <RegisterFormInput
            submit={(email, password) => handleSubmit(email, password)}
            isNotValid={isFailed}
            changeValue={() => setIsFailed(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
