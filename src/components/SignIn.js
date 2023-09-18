import React, { useRef, useState } from "react";
import Logo from "./Logo";
import {
  checkSignUpValidation,
  checkSignInValidation,
} from "../utils/validate";
import {signInUser, signUpUser} from "../utils/authentication";

function SignIn() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  console.log(loadingStatus,"wefduhweuifhw")
  const validateForm = async(e) => {
    e.preventDefault();
    console.log("test");
    setLoadingStatus(true);
    const errs = isSignInForm
      ? checkSignInValidation(email.current.value, password.current.value)
      : checkSignUpValidation(
          fullName.current.value,
          email.current.value,
          password.current.value
        );
        setErrMsg({ ...errs, authErr: null });
    if(errs.email || errs.password || errs.fullName) return;
    let res;
    if(!isSignInForm){
      res = await signUpUser(email.current.value,
        password.current.value, fullName.current.value);
    }else{
      res = await signInUser(email.current.value,
        password.current.value);
    }
    if(res){
      setErrMsg({ ...errMsg, authErr: res });
    }
    setLoadingStatus(false);
  };
  return (
    <div>
      <div className="absolute brightness-50 w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/58126e35-739d-409f-9920-e213b5e2d640/US-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        className="w-[450px] absolute px-16 py-12 bg-black left-0 right-0 mx-auto my-[5%] bg-opacity-70 rounded-md"
        onSubmit={validateForm}
      >
        <h1 className="text-white text-3xl p-2 my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={fullName}
            className=" bg-gray-800 text-white m-2 p-2 w-full px-5 h-12 rounded-md"
            placeholder="Full Name"
          />
        )}
        {!isSignInForm && errMsg?.name && (
          <p className="text-red-600 text-sm  font-bold p-2">{errMsg?.name}</p>
        )}

        <input
          type="text"
          ref={email}
          className=" bg-gray-800 text-white m-2 p-2 w-full px-5 h-12 rounded-md"
          placeholder="Email or Phone Number"
        />
        {errMsg?.email && (
          <p className="text-red-600 font-bold text-sm p-2">{errMsg?.email}</p>
        )}
        <input
          type="password"
          ref={password}
          className="bg-gray-800 text-white m-2 p-2 w-full px-5 h-12 rounded-md"
          placeholder="Password"
        />
        {errMsg?.password && (
          <p className="text-red-600 text-sm font-bold p-2">
            {errMsg?.password}
          </p>
        )}
        {errMsg?.authErr && (
          <p className="text-red-600 text-sm font-bold p-2 transition-transform">
            {errMsg?.authErr}
          </p>
        )}
        <button
          type="submit"
          className= "my-6 mx-2 p-3 bg-red-600 text-white rounded-md w-full "
          disabled = {loadingStatus}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 m-2 p-2">
          {isSignInForm ? "New to Netflix ? " : "Already have an account "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign up now. " : "Sign In now "}
          </span>
        </p>
       <p className="text-white">{loadingStatus}</p> 
      </form>
    </div>
  );
}

export default SignIn;
