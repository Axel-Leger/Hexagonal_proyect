import type { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[]>;
  create(user: Omit<User, "id">): Promise<User>;
  delete(id: string): Promise<void>;
}
