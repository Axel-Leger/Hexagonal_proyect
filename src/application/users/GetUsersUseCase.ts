import type { UserContext } from "../../domain/User";
import type { UserRepository } from "../../domain/UserRepository";

export class GetUserUseCase {
  private userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async execute(): Promise<UserContext> {
    return this.userRepo.getUser();
  }
}
