import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form className="w-[425px] h-[660px] absolute p-12 bg-black/[0.8] my-40 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-5">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 mx-auto w-[314px] h-[50px] rounded-md bg-[#333333] text-white"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 mx-auto w-[314px] h-[50px] rounded-md bg-[#333333] text-white"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 mx-auto w-[314px] h-[50px] rounded-md bg-[#333333] text-white"
        ></input>
        <button className="py-2 my-6 bg-[#E50914] text-white text-center w-[314px] h-[50px] rounded-md font-semibold">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          <span className="text-gray-500">
            {isSigninForm ? "New to Netflix? " : "Already a user? "}{" "}
          </span>
          <span className="cursor-pointer" onClick={toggleSignInForm}>
            {isSigninForm ? "Sign In Now" : "Sign Up Now"}
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
