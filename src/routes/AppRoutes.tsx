import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../ui/pages/CursosPage";
import RegisterPage from "../ui/pages/RegisterPage";
import LoginPage from "../ui/pages/LoginPage";
import NotasPage from "../ui/pages/NotasPage";
import { useAuthStatus } from "../context/AuthContext";

export default function AppRoutes() {

  const {user} = useAuthStatus()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/courses" /> : <Navigate to="/login" />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<DashboardPage />}/>
        <Route path="/notas/:id" element={<NotasPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
