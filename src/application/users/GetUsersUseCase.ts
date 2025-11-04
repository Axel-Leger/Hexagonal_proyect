import type { User } from "../../domain/User";
import type { UserRepository } from "../../domain/UserRepository";

export class GetUsersUseCase {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async execute(): Promise<User[]> {
    return this.userRepo.getAll();
  }
}
