import type { AuthRepository } from "../domain/AuthRepository";
import type { User } from "../domain/User";

export class RegisterUserUseCase {
    private authRepo: AuthRepository;
    
    constructor(authRepo: AuthRepository){
        this.authRepo = authRepo
    }

    async execute(user: Omit<User, "id">): Promise<User>{
        return this.authRepo.register(user)
    }
}