// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { SignupForm } from "./pages/Signup";
// import { LoginForm } from "./Pages/LoginForm";
// import Home from "./Pages/Home";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LandingPage from "./Pages/LandingPage";
// import NotFound from "./Pages/NotFound";
// import Breadcrumb from "./Pages/Breadcrumb";
// import Teams from "./Pages/Teams";
// import Players from "./Pages/Players";
// import Showcase from "./Pages/Showcase";

// export default function App() {
//   return (
//     <Router>
//       <div
//         className="min-h-screen flex items-center justify-center bg-gray-100"
//         style={{
//           backgroundImage: `url('/pl.webp')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="w-full max-w-lx p-8 bg-opacity-70 rounded-lg shadow-lg space-y-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<SignupForm />} />
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/breadcrumb" element={<Breadcrumb />} />
//             <Route path="/showcase" element={<Showcase />} />
//             <Route path="/showcase/team" element={<Teams />} />
//             <Route path="/showcase/team/player" element={<Players />} />

//             <Route path="*" element={<NotFound />} />
//             <Route
//               path="/landingpage"
//               element={<ProtectedRoute element={<LandingPage />} />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignupForm } from "./pages/Signup";
import { LoginForm } from "./pages/LoginForm";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Showcase from "./pages/Showcase";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

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
        <div
          className="w-full max-w-lx p-8 bg-opacity-70 rounded-lg shadow-lg space-y-6"
          style={{
            marginTop: isLoggedIn ? "64px" : "0",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/landingpage"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={<LandingPage />}
                />
              }
            />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/team/:teamId" element={<Teams />} />
            <Route path="/team/:teamId/players" element={<Players />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
