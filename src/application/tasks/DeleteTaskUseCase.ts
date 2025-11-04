import type { TaskRepository } from "../../domain/TaskRepository";

export class DeleteTaskUseCase {
  private taskRepo: TaskRepository;

  constructor(taskRepo: TaskRepository) {
    this.taskRepo = taskRepo;
  }

  async execute(id: string): Promise<void> {
    return this.taskRepo.delete(id);
  }
}
