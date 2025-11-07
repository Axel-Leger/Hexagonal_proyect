"use client";

import type { Task } from "../../domain/Note";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
  return (
    <div className="p-5 bg-white border border-gray-900 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="font-bold text-lg text-gray-900 flex-1">{task.title}</h3>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${
            task.completed
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {task.completed ? "Completo" : "Incompleto"}
        </span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {task.description || "Sin descripción"}
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1.5 text-sm font-medium text-gray-900 border border-gray-900 rounded hover:bg-gray-50 transition-colors"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-50 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
