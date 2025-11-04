import type { User } from '../../../domain/User';
import UserItem from './UserItem';

interface UserListProps {
  users: User[];
  onDelete: (id: string) => void;
}

export default function UserList({ users, onDelete }: UserListProps) {
  if (users.length === 0) {
    return <p className="text-gray-500 italic">No hay usuarios creados.</p>;
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
}