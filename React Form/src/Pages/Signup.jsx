import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput.jsx";
import SelectInput from "../components/SelectInput.jsx";
import RadioGroup from "../components/RadioGroup.jsx";
import Checkbox from "../components/Checkbox.jsx";

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      team: "",
      gender: "",
      password: "",
      confirmpassword: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required").min(2),
      lastName: Yup.string().required("Last Name is required").min(2),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      team: Yup.string().required("Please select a favorite team"),
      gender: Yup.string().required("Please select your gender"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
      agreeToTerms: Yup.bool().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: (values) => {
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        team: values.team,
        gender: values.gender,
        password: values.password,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      alert("Signup successful! Data saved to local storage.");
      formik.resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-10 space-y-6"
      >
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Sign Up
        </h1>
        <p className="text-center text-base text-blue-700 mb-6">
          Join Fantasy NPL and create your team!
        </p>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <TextInput
              label="First Name"
              id="firstName"
              type="text"
              formik={formik}
              labelClass="text-gray-800"
            />
            <TextInput
              label="Last Name"
              id="lastName"
              type="text"
              formik={formik}
              labelClass="text-gray-800"
            />
          </div>

          <TextInput
            label="Email Address"
            id="email"
            type="email"
            formik={formik}
            labelClass="text-gray-800"
          />

          <SelectInput
            label="Favourite Team"
            id="team"
            options={[
              "Kathmandu Rayzrs",
              "Biratnagar City FC",
              "Lalitpur City FC",
              "Pokhara Thunders",
              "Dhangadhi FC",
              "Chitwan FC",
              "Butwal Lumbini FC",
              "FC Far West",
            ]}
            formik={formik}
            labelClass="text-gray-800"
          />

          <RadioGroup
            label="Gender"
            name="gender"
            options={["Male", "Female"]}
            formik={formik}
            labelClass="text-gray-800"
          />

          <div className="grid grid-cols-2 gap-6">
            <TextInput
              label="Password"
              id="password"
              type="password"
              formik={formik}
              labelClass="text-gray-800"
            />
            <TextInput
              label="Confirm Password"
              id="confirmpassword"
              type="password"
              formik={formik}
              labelClass="text-gray-800"
            />
          </div>

          <Checkbox
            label="I agree to the terms and conditions"
            id="agreeToTerms"
            formik={formik}
            labelClass="text-gray-800"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-lg"
        >
          Create Account
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};
