import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // Validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message === null) {
      // Create a new user (Sign in/ Sign up)
      if (!isSigninForm) {
        // SIgn up(new account) logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://xsgames.co/randomusers/avatar.php?g=male",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );

                // ...
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        // SIgn in logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          className="brightness-50 bg-cover bg-no-repeat overflow-auto scrollbar-hide "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[425px] h-[660px] absolute p-12 bg-black/[0.8] my-40 mx-auto right-0 left-0 text-white rounded-sm"
      >
        <h1 className="font-bold text-3xl py-5">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 mx-auto w-[314px] h-[50px] rounded-md bg-[#333333] text-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 mx-auto w-[314px] h-[50px] rounded-md bg-[#333333] text-white"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 mx-auto w-[314px] h-[50px] rounded-md bg-[#333333] text-white"
        ></input>
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="py-2 my-6 bg-[#E50914] text-white text-center w-[314px] h-[50px] rounded-md font-semibold"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          <span className="text-gray-500">
            {isSigninForm ? "New to Netflix? " : "Already a user? "}{" "}
          </span>
          <span className="cursor-pointer" onClick={toggleSignInForm}>
            {isSigninForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
        <p className="text-gray-500 text-[13px]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          The information collected by Google reCAPTCHA is subject to the Google
          Privacy Policy and Terms of Service, and is used for providing,
          maintaining, and improving the reCAPTCHA service and for general
          security purposes (it is not used for personalised advertising by
          Google).
        </p>
      </form>
    </div>
  );
};

export default Login;
