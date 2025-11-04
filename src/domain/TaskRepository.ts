import type { Task } from "./Task";

export interface TaskRepository {
  getAll(): Promise<Task[]>;
  create(task: Omit<Task, "id">): Promise<Task>;
  update(id: string, data: Partial<Task>): Promise<Task>;
  delete(id: string): Promise<void>;
}
