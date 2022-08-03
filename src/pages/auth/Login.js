import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormInput from "../../components/auth/login/FormInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../store/auth-context";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  const [isFailed, setIsFailed] = useState(false);

  const authDataHandler = (token, useremail) => {
    setLogin(token, useremail);
    localStorage.setItem("token", token);
    localStorage.setItem("useremail", useremail);
    navigate("/");
  };

  const handleSubmit = async (emailData, passwordData) => {
    const email = emailData;
    const password = passwordData;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
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
    <div className="flex w-full min-h-screen items-center justify-center bg-[#141414]">
      <div className="flex flex-col gap-y-4 bg-[#3B3B3B] p-8 rounded-md">
        <p className="font-semibold text-3xl text-white text-center">LOGIN</p>
        <LoginFormInput
          submit={(email, password) => handleSubmit(email, password)}
          isNotValid={isFailed}
          changeValue={() => setIsFailed(false)}
        />
      </div>
    </div>
  );
};

export default Login;
