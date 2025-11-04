import type { Task } from "../../domain/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onUpdate, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No hay tareas. ¡Crea la primera!</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
