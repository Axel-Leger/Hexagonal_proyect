import type { UserContext } from "../AuthUsers/domain/User"

export interface AuthContextType{
    user: UserContext | null
    setUser: React.Dispatch<React.SetStateAction<UserContext | null>>
}