// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ _role }) {
  // For now, allow all access since auth is removed
  return <Outlet />;
}
