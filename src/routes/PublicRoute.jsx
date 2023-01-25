import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const auth = localStorage.getItem("Kazari|Admin");
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
