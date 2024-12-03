import React from "react";

const TextInput = ({ label, id, type, formik }) => (
  <div>
    <label htmlFor={id} className="block text-gray-800 font-medium mb-1">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[id]}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
        formik.errors[id] && formik.touched[id]
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />
    {formik.errors[id] && formik.touched[id] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[id]}</p>
    )}
  </div>
);

export default TextInput;
