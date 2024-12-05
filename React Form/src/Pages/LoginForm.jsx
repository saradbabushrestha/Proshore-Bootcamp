import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TextInput from "../components/TextInput";
import * as Yup from "yup";

export const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        const users = response.data;

        const user = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );

        if (user) {
          alert("Login successful!");
          navigate("/landingpage");
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("Error fetching data from JSON server:", error);
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-sm mx-auto p-8 bg-white bg-opacity-100 rounded-lg shadow-lg space-y-6"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Welcome Back
        </h1>
        <p className="text-center text-sm text-gray-500 mb-4">
          Please enter your credentials to continue
        </p>

        <TextInput
          label="Email Address"
          id="email"
          type="email"
          formik={formik}
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          formik={formik}
        />

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};
