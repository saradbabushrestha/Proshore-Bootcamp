import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return loggedInUser ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
