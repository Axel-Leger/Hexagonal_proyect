import type { Task } from "../../domain/Task";
import type { TaskRepository } from "../../domain/TaskRepository";

export class GetTasksUseCase {
  private taskRepo: TaskRepository;

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo;
  }

  async execute(): Promise<Task[]> {
    return this.taskRepo.getAll();
  }
}
