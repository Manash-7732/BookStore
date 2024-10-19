import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      email_id: data.email,
      password: data.password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/signup/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }
      );

      const responseData = await response.json();
      console.log(`manash ${responseData}`);
      localStorage.setItem(
        "UserInfo",
        JSON.stringify(responseData.createdUser)
      );

      if (response.ok) {
        alert("Login Successfully");
      } else {
        alert(`Error: ${responseData.message} scs`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register, please try again.");
    }
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg dark:text-white">Login</h3>
            {/* Emial */}
            <div className="mt-4 dark:text-white">
              <p>Email</p>
              <input
                type="email"
                className="border rounded-md py-1 px-2 text-sm dark:bg-slate-900 dark:text-white"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}

            <div className="mt-4">
              <p className="dark:text-white">Password</p>
              <input
                type="password"
                className="border rounded-md py-1 px-2 text-sm dark:bg-slate-700 dark:text-white"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="mt-4 flex justify-between">
              <button
                type="submit"
                className=" px-3 py-2 bg-pink-500 rounded-md cursor:text-white mr-6 dark:bg-slate-900 dark:text-white"
              >
                login
              </button>
              <p className="dark:text-white">
                Not registred?{" "}
                <Link to="/signup" className="text-blue-800 underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
