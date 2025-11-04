import type { User } from '../../../domain/User';
import Button from '../../shared/Button';

interface UserItemProps {
  user: User;
  onDelete: (id: string) => void;
}

export default function UserItem({ user, onDelete }: UserItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
      <div>
        <p className="font-medium text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
      <Button
        variant="danger"
        onClick={() => onDelete(user.id)}
        className="px-3 py-1 text-sm"
      >
        Eliminar
      </Button>
    </div>
  );
}