import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../ui/pages/DashboardPage";
import RegisterPage from "../ui/pages/RegisterPage";
import LoginPage from "../ui/pages/LoginPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
