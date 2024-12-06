import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setUser } from "../redux/userSlice.js";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          dispatch(setUser(user));
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
    <div className="w-full max-w-sm mx-auto p-8 bg-white rounded-lg shadow-md">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-3xl font-semibold text-center mb-4">Login</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            className="w-full p-2 border rounded"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps("password")}
            className="w-full p-2 border rounded"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};
