import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = ({ children }) => {
  const { Authorized } = useContext(AuthContext);

  if (!Authorized) {
    return <Navigate to="/login" />;
  }

  return children;
};
