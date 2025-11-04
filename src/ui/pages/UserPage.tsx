import { useUsers } from "../../hooks/useUsers";
import UserForm from "../components/users/UserForm";
import UserList from "../components/users/UserList";

export default function UserPage() {
  const { users, loading, createUser, deleteUser } = useUsers();

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">Cargando usuarios...</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Gestión de Usuarios
      </h1>
      <UserForm onSubmit={createUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}
