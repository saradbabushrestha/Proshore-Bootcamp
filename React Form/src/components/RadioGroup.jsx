import React from "react";

const RadioGroup = ({ label, name, options, formik }) => (
  <div>
    <label className="block text-white font-medium mb-1">{label}</label>
    <div className="flex space-x-4">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input
            id={`${name}-${option}`}
            name={name}
            type="radio"
            value={option}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[name] === option}
            className={`h-4 w-4 ${
              formik.errors[name] && formik.touched[name]
                ? "text-red-500 border-red-500 focus:ring-red-500"
                : "text-blue-500 border-gray-300 focus:ring-blue-500"
            }`}
          />
          <label
            htmlFor={`${name}-${option}`}
            className="ml-2 text-white capitalize"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
    {formik.errors[name] && formik.touched[name] && (
      <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
    )}
  </div>
);

export default RadioGroup;
