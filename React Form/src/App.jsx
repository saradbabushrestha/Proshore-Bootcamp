import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignupForm } from "./Pages/Signup";
import { LoginForm } from "./Pages/LoginForm";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url('/pl.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-lx p-8 bg-opacity-70 rounded-lg shadow-lg space-y-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/landingpage" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
