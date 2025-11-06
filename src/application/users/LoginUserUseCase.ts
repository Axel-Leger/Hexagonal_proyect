import type { AuthRepository } from "../../domain/AuthRepository";
import type { User } from "../../domain/User";

export class LoginUserUseCase {
    private authRepo: AuthRepository;
    
    constructor(authRepo: AuthRepository){
        this.authRepo = authRepo
    }

    async execute(user: Omit<User, "id"|"name">): Promise<User>{
        return this.authRepo.login(user)
    }
}