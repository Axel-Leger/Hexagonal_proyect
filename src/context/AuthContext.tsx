import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { UserApiService } from "../AuthUsers/infrastructure/UserApiService";
import { GetUserUseCase } from "../AuthUsers/application/GetUsersUseCase";
import type { UserContext } from "../AuthUsers/domain/User";
import type { AuthContextType } from "./typesCourse";


interface AuthProviderProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserContext | null>(null)

    const userService = useMemo(()=> new UserApiService(), [])
    const getUserCase = useMemo(()=> new GetUserUseCase(userService), [userService])

    useEffect(()=>{
        async function fetchUser() {
            try {
                const currentUser = await getUserCase.execute()
                setUser(currentUser)
                console.log("Usuario encontrado");
            } catch (error) {
                console.log("no se encontro ningun usuarui", error);                
            }            
        }

        fetchUser()
    }, [getUserCase])

    


    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthStatus(): AuthContextType {
    const context = useContext(AuthContext)
    
    if(!context){
        throw new Error("error")
    }

    return context
}