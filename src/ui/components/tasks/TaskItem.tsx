import type { Task } from '../../../domain/Task';
import Button from '../../shared/Button';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => onToggle(task.id, e.target.checked)}
          className="h-5 w-5 text-blue-600 rounded"
        />
        <span
          className={`text-lg ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {task.title}
        </span>
      </div>
      <Button
        variant="danger"
        onClick={() => onDelete(task.id)}
        className="px-3 py-1 text-sm"
      >
        Eliminar
      </Button>
    </div>
  );
}