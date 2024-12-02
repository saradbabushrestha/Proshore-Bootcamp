import React, { useState } from "react";
import { SignupForm } from "./Pages/Signup";
import { LoginForm } from "./Pages/LoginForm";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true); // After signup, switch to login form
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url('/pl.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-lg backdrop-blur-lg rounded-lg shadow-lg p-8 border border-gray-200">
        {isSubmitted ? (
          <LoginForm />
        ) : (
          <SignupForm onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
}
