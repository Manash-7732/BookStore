import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const [firstname, setfirstname] = useState([]);
  const [email_id, setemail_id] = useState([]);
  const [password, setpassword] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      fullname: data.name,
      email_id: data.email,
      password: data.password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/signup/`,
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
        alert("Registered Successfully");
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
      <div className="duration-300 transform hover:scale-105 dark:bg-slate-900 dark:text-white">
        <div className="flex justify-center items-center h-screen dark:bg-slate-900 dark:text-white">
          <div className="modal-box dark:bg-slate-900 dark:text-white p-6 rounded-md shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg mb-4">Signup</h3>

              {/* Name field */}
              <div className="mb-4">
                <label className="block text-sm">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md py-1 px-2 text-sm dark:bg-slate-900 dark:text-white"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="mb-4">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-md py-1 px-2 text-sm dark:bg-slate-900 dark:text-white"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password field */}
              <div className="mb-4">
                <label className="block text-sm">Password</label>
                <input
                  type="password"
                  className="w-full border rounded-md py-1 px-2 text-sm dark:bg-slate-900 dark:text-white"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              {/* Submit button and Login prompt */}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  Signup
                </button>
                <p className="text-sm">
                  Have an account?{" "}
                  <span>
                    <a
                      className="text-blue-800 underline"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </a>
                    <Login />
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
