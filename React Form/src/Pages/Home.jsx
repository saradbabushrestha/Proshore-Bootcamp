import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  px-4">
      <div className="flex space-x-8 w-full max-w-4xl justify-center">
        <Link to="/signup">
          <button
            type="button"
            className="relative w-64 py-6 px-10 text-4xl font-extrabold text-white group transition-all duration-300 ease-out bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-110"
          >
            <span className="absolute inset-0 w-0 bg-white opacity-10 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative z-10">Signup</span>
          </button>
        </Link>
        <Link to="/login">
          <button
            type="button"
            className="relative w-64 py-6 px-10 text-4xl font-extrabold text-white group transition-all duration-300 ease-out bg-gradient-to-r from-teal-400 via-green-500 to-lime-400 hover:from-lime-400 hover:via-green-500 hover:to-teal-400 rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-110"
          >
            <span className="absolute inset-0 w-0 bg-white opacity-10 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative z-10">Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
