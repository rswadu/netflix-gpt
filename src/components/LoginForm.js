import { useRef, useState } from "react";
import { validata } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [logStatus, setLogStatus] = useState("sign-in");
  const [formValidInfo, setFormValidInfo] = useState("");
  const navigate=useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggleSigninForm = () => {
    logStatus === "sign-in" ? setLogStatus("sign-up") : setLogStatus("sign-in");
  };

  const handleBtnClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const validation = validata(email.current.value, password.current.value);
    console.log(validation);
    setFormValidInfo(validation);
    if (validation) return;
    if (logStatus === "sign-in") {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormValidInfo(errorMessage+"-"+errorCode);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormValidInfo(errorMessage+"-"+errorCode);
          // ..
        });
    }
  };

  return (
    <div className="m-40 relative w-4/12">
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="text-white p-5  flex flex-col  justify-center items-center bg-black bg-opacity-60 rounded-lg"
      >
        <h1 className=" text-2xl">{logStatus}</h1>
        {logStatus === "sign-up" && (
          <input
            ref={name}
            type="text"
            placeholder="full name"
            className="p-3 m-3 w-9/12 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-3 m-3 w-9/12 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-3 m-3 w-9/12 bg-gray-700"
        />
        <p className="text-red-600 ">{formValidInfo}</p>
        <button
          type="submit"
          onClick={handleBtnClick}
          className="p-3 m-3 bg-red-600 text-white w-9/12"
        >
          {logStatus}
        </button>
        <h1 className="cursor-pointer" onClick={handleToggleSigninForm}>
          {logStatus === "sign-in"
            ? "new to netflix ? sign up here"
            : "already registered ? sign in"}
        </h1>
      </form>
    </div>
  );
};
export default LoginForm;
