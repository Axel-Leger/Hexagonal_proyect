import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../ui/pages/CursosPage";
import RegisterPage from "../ui/pages/RegisterPage";
import LoginPage from "../ui/pages/LoginPage";
import NotasPage from "../ui/pages/NotasPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<DashboardPage />}/>
        <Route path="/notas/:id" element={<NotasPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
