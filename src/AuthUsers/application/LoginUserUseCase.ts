import type { AuthRepository } from "../domain/AuthRepository";
import type { User, UserContext } from "../domain/User";

export class LoginUserUseCase {
    private authRepo: AuthRepository;
    
    constructor(authRepo: AuthRepository){
        this.authRepo = authRepo
    }

    async execute(user: Omit<User, "id"|"name">): Promise<UserContext>{
        return this.authRepo.login(user)
    }
}