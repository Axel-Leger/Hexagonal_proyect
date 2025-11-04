import { useState, useEffect } from "react";
import { User } from "../domain/User";
import { UserApiService } from "../infrastructure/api/UserApiService";
import { GetUsersUseCase } from "../application/users/GetUsersUseCase";
import { CreateUserUseCase } from "../application/users/CreateUserUseCase";
import { DeleteUserUseCase } from "../application/users/DeleteUserUseCase";

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

  const deleteUser = async (id: string) => {
    const deleteUseCase = new DeleteUserUseCase(userRepo);
    await deleteUseCase.execute(id);
    loadUsers();
  };

  return { users, loading, createUser, deleteUser };
}
