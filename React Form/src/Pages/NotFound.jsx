import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <p className="mt-4 text-lg text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
