import React, { useState } from "react";
import Logo from "./Logo";

function SignIn() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Logo />
      <div className="absolute brightness-50 w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/58126e35-739d-409f-9920-e213b5e2d640/US-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-[450px] absolute px-16 py-12 bg-black left-0 right-0 mx-auto my-[5%] bg-opacity-70 rounded-md">
        <h1 className="text-white text-3xl p-2 my-2">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input
          type="text"
          className=" bg-gray-800 text-white m-2 p-2 w-full px-5 h-12 rounded-md"
          placeholder="Full Name"
        />}

        <input
          type="text"
          className=" bg-gray-800 text-white m-2 p-2 w-full px-5 h-12 rounded-md"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          className="bg-gray-800 text-white m-2 p-2 w-full px-5 h-12 rounded-md"
          placeholder="Password"
        />
        <button
          type="submit"
          className=" my-6 mx-2 p-3 bg-red-600 text-white rounded-md w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 m-2 p-2">
        {isSignInForm ? 'New to Netflix ? ' : 'Already have an account '} 
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={toggleSignIn}
          >
            {isSignInForm ? 'Sign up now. ' : 'Sign In now '} 
            
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
