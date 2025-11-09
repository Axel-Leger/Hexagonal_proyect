import type { AuthRepository } from "../domain/AuthRepository";
import type { User, UserContext } from "../domain/User";

const API_URL = "http://localhost:3000/api/auth"

export class AuthApiService implements AuthRepository{


    async login(user: Omit<User, "id" | "name">): Promise<UserContext> {
          const res = await fetch(`${API_URL}/login `,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(user)
        })

        if(!res.ok) throw new Error("Error al iniciar session")
        
        const data = await res.json()
        
        localStorage.setItem("user", JSON.stringify(data))

        const userContext: UserContext = {
            message: data.message,
            id: data.id,
            name: data.name,
            email: data.email
        }

        return userContext
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

    async logout(): Promise<void> {

        try { 
            const user = localStorage.getItem("user")

            if(!user){
                console.error("No se econtro ningun usuario");    
                return;        
            }
                
            localStorage.removeItem("user")
            console.log("Se cerro session con exito");
                
        } catch (error) {
            console.error("Error al cerrar session", error);     
        }

    }

}