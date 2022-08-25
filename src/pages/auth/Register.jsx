import { useContext, useState } from "react";
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
      navigate("/");
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

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-[#141414]">
      <div className="flex flex-col gap-y-4 bg-[#3B3B3B] p-8 rounded-md">
        <p className="font-semibold text-3xl text-white text-center">
          REGISTER
        </p>
        <RegisterFormInput
          submit={(email, password) => handleSubmit(email, password)}
          isNotValid={isFailed}
          changeValue={() => setIsFailed(false)}
        />
      </div>
    </div>
  );
};

export default Register;
