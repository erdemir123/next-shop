"use client"
import { LogoIcon } from "@/assets/icons";
import React, { useState } from "react";
import BetterLink from "./BetterLink";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/toolkit/store/hooks";
import { validateEmail, validatePassword } from "@/utils/formValidation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";

interface Iprops {
  loginUser: ıLoginUser;
  setLoginUser: (loginUser: ıLoginUser) => void;
}

const Login = ({ loginUser, setLoginUser }: Iprops) => {
  const [startEmailValidation, setStartEmailValidation] = useState(false);
  const [startPasswordValidation, setStartPasswordValidation] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isEmailValid =
    loginUser.email.length !== 0 && validateEmail(loginUser.email);
  const isPasswordValid =
    loginUser.password.length !== 0 && validatePassword(loginUser.password);

  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
console.log(user)
  if (user?.email) {
    router.replace("/collections");
  }

  const submitHandler = (e: HTMLFormElement) => {
    e.preventDefault();
    setStartEmailValidation(true);
    setStartPasswordValidation(true);
    if (isEmailValid && isPasswordValid && !serverErrorMessage) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
        .then((user) => console.log(user))
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode === "auth/user-not-found") {
            setServerErrorMessage("Account doesn't exist.");
          } else if (errorCode === "auth/wrong-password") {
            setServerErrorMessage("Invalid password.");
          } else {
            setServerErrorMessage("Something went wrong.");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <div className="border justify-center items-center flex flex-1">
      {user?.email ? (
        <>
          <p>
            You are signed in as <span className="bold">{user.email}</span>.
            You'll now be redirected.
          </p>
        </>
      ) : (
        <div className="flex flex-col bg-slate-500">
          <BetterLink>
            <LogoIcon />
          </BetterLink>
          <form onSubmit={(e) => submitHandler}>
            <div>
              <input
                type="text"
                placeholder="Email.."
                className="input"
                value={loginUser.email}
                onChange={(e: any) =>
                  setLoginUser({ ...loginUser, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Password"
                className="input"
                value={loginUser.password}
                onChange={(e: any) =>
                  setLoginUser({ ...loginUser, password: e.target.value })
                }
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? <span className="loader"></span> : "Sign In"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
