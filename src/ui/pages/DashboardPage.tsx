"use client";

import { useTasks } from "../../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function DashboardPage() {
  const { tasks, loading, createTask, updateTask, deleteTask } = useTasks();

  //if (loading) return <div className="p-8 text-gray-600">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-12 pt-10 pb-8 bg-white border-b border-gray-200">
        <h1 className="text-5xl font-black text-gray-900">
          Administrador de Tareas
        </h1>
      </div>

      <div className="flex min-h-[calc(100vh-120px)]">
        {/* Columna izquierda - Formulario */}
        <div className="w-[380px] px-10 py-8 bg-white border-r border-gray-300">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Crear Tarea:</h2>
          <TaskForm onSubmit={createTask} />
        </div>

        {/* Columna derecha - Lista de tareas */}
        <div className="flex-1 px-10 py-8 overflow-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tareas</h2>
          <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}
