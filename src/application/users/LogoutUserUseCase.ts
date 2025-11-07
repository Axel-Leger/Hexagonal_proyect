import type { AuthRepository } from "../../domain/AuthRepository";

export class LogoutUserUseCase {
    private authRepo: AuthRepository;
    
    constructor(authRepo: AuthRepository){
        this.authRepo = authRepo
    }

    async execute(): Promise<void>{
        return this.authRepo.logout()
    }
}