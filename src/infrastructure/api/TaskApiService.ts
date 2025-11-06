import type { Task } from "../../domain/Task";  
import type { TaskRepository } from "../../domain/TaskRepository"; 

const API_URL = 'http://localhost:3000/tasks';

export class TaskApiService implements TaskRepository {
  
  async getAll(): Promise<Task[]> {
    const res = await fetch(API_URL);
    
    if(!res.ok){
      throw new Error("Error al traer la informacion desde el servidor")
    }
    
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

    if(!res.ok){
      throw new Error("Error al traer la informacion desde el servidor")
    }

    const updated = await res.json();

    if(!updated.id){
      console.log("No trae el id del backend")
    } 

    if(!updated.title){
      console.log("No trae el titulo del backend")
    }

    if(!updated.description){
      console.log("No trae la descripicon del backend")
    } 

    if(!updated.completed){
      console.log("No trae la seccion completed del backend")
    }

    return updated as Task;
  }

  // void se usar cuando la funcion no devuelva nada
  async delete(id: string): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
}