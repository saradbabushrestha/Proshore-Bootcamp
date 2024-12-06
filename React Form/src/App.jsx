import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignupForm } from "./pages/Signup";
import { LoginForm } from "./Pages/LoginForm";
import Home from "./Pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound";
import Breadcrumb from "./Pages/Breadcrumb";
import Teams from "./Pages/Teams";
import Players from "./Pages/Players";
import Showcase from "./Pages/Showcase";

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
            <Route path="/breadcrumbs" element={<Breadcrumb />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/showcase/team" element={<Teams />} />
            <Route path="/showcase/team/player" element={<Players />} />

            <Route path="*" element={<NotFound />} />
            <Route
              path="/landingpage"
              element={<ProtectedRoute element={<LandingPage />} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
