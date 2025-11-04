import type { Task } from "../../domain/Task";
import type { TaskRepository } from "../../domain/TaskRepository";

export class UpdateTaskUseCase {
  private taskRepo: TaskRepository;

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo;
  }

  async execute(id: string, data: Partial<Task>): Promise<Task> {
    return this.taskRepo.update(id, data);
  }
}
