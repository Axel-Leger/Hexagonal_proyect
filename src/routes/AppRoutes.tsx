import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../ui/pages/DashboardPage";
import type { JSX } from "react/jsx-dev-runtime";
import LoginPage from "../ui/pages/LoginPage";

// Función auxiliar para proteger rutas
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
