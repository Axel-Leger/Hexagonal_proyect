import type { User } from "./User";

export interface AuthRepository {

    login(user: Omit<User, "id" | "name">): Promise<User>
    register(user: Omit<User, "id">): Promise<User>
}