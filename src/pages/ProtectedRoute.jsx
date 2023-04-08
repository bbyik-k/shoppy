import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";

export default function ProtectedRoute({ children, requirAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requirAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
