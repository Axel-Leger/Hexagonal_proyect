import { useState } from 'react';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

interface TaskFormProps {
  onSubmit: (title: string) => void;
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <Input
        label="Nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ej: Hacer el TP de arquitectura"
      />
      <Button type="submit" className="mt-2 w-full">
        Agregar Tarea
      </Button>
    </form>
  );
}