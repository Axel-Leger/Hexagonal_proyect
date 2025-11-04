import type { Task } from "../../domain/Task";
import type { TaskRepository } from "../../domain/TaskRepository";

export class CreateTaskUseCase {
  private taskRepo: TaskRepository;

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo;
  }

  async execute(title: string): Promise<Task> {
    return this.taskRepo.create({ title, completed: false });
  }
}
