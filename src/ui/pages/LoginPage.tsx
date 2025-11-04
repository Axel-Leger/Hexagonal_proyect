import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulamos login (sin autenticación real)
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Inicio de Sesión</h1>
          <p className="text-gray-600 mt-2">
            Ingresa con tu correo para acceder al panel de tareas
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  );
}
