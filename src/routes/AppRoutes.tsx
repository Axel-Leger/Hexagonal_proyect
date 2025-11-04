import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskPage from "../ui/pages/TaskPage";
import HomePage from "../ui/pages/HomePage";
import UserPage from "../ui/pages/UserPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
