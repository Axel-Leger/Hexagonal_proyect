import { useTasks } from "../../hooks/useTasks";
import TaskForm from "../infrastructure/ui/components/tasks/TaskForm";
import TaskList from "../infrastructure/ui/components/tasks/TaskList";

export default function TaskPage() {
  const { tasks, loading, createTask, toggleTask, deleteTask } = useTasks();

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">Cargando tareas...</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Gestión de Tareas
      </h1>
      <TaskForm onSubmit={createTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
