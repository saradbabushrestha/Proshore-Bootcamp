import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import TextInput from "../components/TextInput.jsx";
import SelectInput from "../components/SelectInput.jsx";
import RadioGroup from "../components/RadioGroup.jsx";
import Checkbox from "../components/Checkbox.jsx";

export const SignupForm = ({ onSubmit }) => {
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

      onSubmit();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto p-6 rounded-lg shadow-md space-y-4 backdrop-blur-lg bg-opacity-40"
    >
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Fantasy NPL Signup Form
      </h1>
      <TextInput
        label="First Name"
        id="firstName"
        type="text"
        formik={formik}
      />
      <TextInput label="Last Name" id="lastName" type="text" formik={formik} />
      <TextInput
        label="Email Address"
        id="email"
        type="email"
        formik={formik}
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
      />
      <RadioGroup
        label="Gender"
        name="gender"
        options={["Male", "Female"]}
        formik={formik}
      />
      <TextInput
        label="Password"
        id="password"
        type="password"
        formik={formik}
      />
      <TextInput
        label="Confirm Password"
        id="confirmpassword"
        type="password"
        formik={formik}
      />
      <Checkbox
        label="I agree to the terms and conditions"
        id="agreeToTerms"
        formik={formik}
      />
      <button
        type="submit"
        className="w-full py-3 px-6 text-white rounded-md transition-all"
        style={{
          background: "linear-gradient(to right, #003B5C 50%, #D72D2F 50%)",
          border: "2px solid #003B5C",
        }}
      >
        Signup
      </button>
    </form>
  );
};
