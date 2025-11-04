import { useState, useEffect } from "react";

import type { User } from "../domain/User";
import { UserApiService } from "../infrastructure/api/UserApiService";
import { GetUsersUseCase } from "../application/users/GetUsersUseCase";
import { CreateUserUseCase } from "../application/users/CreateUserUseCase";

const userRepo = new UserApiService();

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    setLoading(true);
    const getUseCase = new GetUsersUseCase(userRepo);
    const data = await getUseCase.execute();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const createUser = async (name: string, email: string) => {
    const createUseCase = new CreateUserUseCase(userRepo);
    await createUseCase.execute(name, email);
    loadUsers();
  };

  return { users, loading, createUser };
}
