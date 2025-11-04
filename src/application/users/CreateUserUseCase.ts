import type { User } from "../../domain/User";
import type { UserRepository } from "../../domain/UserRepository";

export class CreateUserUseCase {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async execute(name: string, email: string): Promise<User> {
    return this.userRepo.create({ name, email });
  }
}
