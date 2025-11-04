import { useState, useEffect } from "react";

import { TaskApiService } from "../infrastructure/api/TaskApiService";
import { GetTasksUseCase } from "../application/tasks/GetTasksUseCase";
import { CreateTaskUseCase } from "../application/tasks/CreateTaskUseCase";
import { UpdateTaskUseCase } from "../application/tasks/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../application/tasks/DeleteTaskUseCase";
import type { Task } from "../domain/Task";

const taskRepo = new TaskApiService();

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    const getUseCase = new GetTasksUseCase(taskRepo);
    const data = await getUseCase.execute();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (taskData: Omit<Task, "id">) => {
    const createUseCase = new CreateTaskUseCase(taskRepo);
    await createUseCase.execute(taskData);
    loadTasks();
  };
  const updateTask = async (task: Task) => {
    const updateUseCase = new UpdateTaskUseCase(taskRepo);
    await updateUseCase.execute(task.id, task);
    loadTasks();
  };
  const toggleTask = async (id: string, completed: boolean) => {
    const updateUseCase = new UpdateTaskUseCase(taskRepo);
    await updateUseCase.execute(id, { completed });
    loadTasks();
  };

  const deleteTask = async (id: string) => {
    const deleteUseCase = new DeleteTaskUseCase(taskRepo);
    await deleteUseCase.execute(id);
    loadTasks();
  };

  return { tasks, loading, createTask, toggleTask, deleteTask, updateTask };
}
