import { useForm } from "react-hook-form";
import Header from "./Header";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { backgroundImg } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async (data) => {
    if (isSignIn) {
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const updateRes = await updateProfile(auth.currentUser, {
          displayName: data.name,
        });

        console.log(res.user);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    clearErrors();
  };

  const InputField = ({ type, placeholder, name, validation }) => (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 bg-gray-800 text-white rounded"
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </>
  );

  return (
    <div className="relative w-screen h-screen">
      <Header />
      <img
        className="w-full h-full object-cover"
        src={backgroundImg}
        alt="background"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] p-8 bg-black/75 rounded-lg text-white flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <InputField
              type="text"
              placeholder="Name"
              name="name"
              validation={{ required: "Name is required" }}
            />
          )}

          <InputField
            type="text"
            placeholder="Email or phone number"
            name="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            }}
          />

          <InputField
            type="password"
            placeholder="Password"
            name="password"
            validation={{
              required: "Password is required",
            }}
          />

          {errors.firebase && (
            <p className="text-red-500 text-sm text-center">
              {errors.firebase.message}
            </p>
          )}

          <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-gray-400 text-center">
            {isSignIn ? "New to Netflix? " : "Already have an account? "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignIn ? "Sign up now" : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
