import type { AuthRepository } from "../../domain/AuthRepository";
import type { User } from "../../domain/User";

const API_URL = "http://localhost:3000/api/auth"

export class AuthApiService implements AuthRepository{


    async login(user: Omit<User, "id" | "name">): Promise<User> {
          const res = await fetch(`${API_URL}/login `,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(user)
        })

        if(!res.ok) throw new Error("Error al iniciar session")
        
        return res.json()
    }

    
    async register(user: Omit<User, "id">): Promise<User> {
        
        const res = await fetch(`${API_URL}/register`,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(user)
        })

        if(!res.ok) throw new Error("Error al registrar usuario")
        
        return res.json()
    }

}