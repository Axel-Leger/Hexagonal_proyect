import type { Task } from "../../domain/Task";
import type { TaskRepository } from "../../domain/TaskRepository";

export class CreateTaskUseCase {
  private taskRepo: TaskRepository;

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo;
  }

  // 👇 Acepta el objeto completo (sin id)
  async execute(task: Omit<Task, "id">): Promise<Task> {
    return this.taskRepo.create(task);
  }
}
