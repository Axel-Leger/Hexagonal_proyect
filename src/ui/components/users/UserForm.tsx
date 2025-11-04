import { useState } from 'react';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

interface UserFormProps {
  onSubmit: (name: string, email: string) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onSubmit(name.trim(), email.trim());
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <Input
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ej: Gabriel Acosta"
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ejemplo@correo.com"
      />
      <Button type="submit" className="w-full">
        Agregar Usuario
      </Button>
    </form>
  );
}