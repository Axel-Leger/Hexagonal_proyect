import type { User, UserContext } from "./User";

export interface AuthRepository {

    login(user: Omit<User, "id" | "name">): Promise<UserContext>
    register(user: Omit<User, "id">): Promise<User>
    logout(): Promise<void>
}