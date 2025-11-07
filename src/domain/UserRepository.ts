import type { UserContext } from "./User";

export interface UserRepository {
  getUser(): Promise<UserContext>;
}
