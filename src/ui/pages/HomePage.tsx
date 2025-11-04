import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Gestión de Tareas y Usuarios
        </h1>
        <p className="text-gray-600 mb-8">
          Proyecto con Arquitectura Hexagonal – Frontend en React + TypeScript
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tasks"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ir a Tareas
          </Link>
          <Link
            to="/users"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Ir a Usuarios
          </Link>
        </div>
      </div>
    </div>
  );
}
