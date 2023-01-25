import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("Kazari|Admin");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
