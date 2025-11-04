import type { Task } from "../../../domain/Task"; 
import type { TaskRepository } from "../../../domain/TaskRepository";

const API_URL = 'http://localhost:3000/tasks';

export class TaskApiService implements TaskRepository {
  async getAll(): Promise<Task[]> {
    const res = await fetch(API_URL);
    return res.json();
  }

  async create(task: Omit<Task, 'id'>): Promise<Task> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    return res.json();
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const updated = await res.json();
    return updated as Task;
  }

  async delete(id: string): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
}