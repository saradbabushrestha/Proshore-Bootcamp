import React from "react";

const Checkbox = ({ label, id, formik }) => (
  <div className="flex items-center">
    <input
      id={id}
      name={id}
      type="checkbox"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      checked={formik.values[id]}
      className={`h-4 w-4 ${
        formik.errors[id] && formik.touched[id]
          ? "text-red-500 border-red-500 focus:ring-red-500"
          : "text-blue-500 border-gray-300 focus:ring-blue-500"
      }`}
    />
    <label htmlFor={id} className="ml-2 text-gray-800">
      {label}
    </label>
    {formik.errors[id] && formik.touched[id] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[id]}</p>
    )}
  </div>
);

export default Checkbox;
