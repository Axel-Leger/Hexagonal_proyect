"use client";

import type React from "react";

import { useState } from "react";
import Input from "../shared/Input";

interface TaskFormProps {
  onSubmit: (task: {
    title: string;
    description: string;
    completed: boolean;
  }) => void;
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      completed,
    });
    setTitle("");
    setDescription("");
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2">Título:</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=""
          required
          className="border border-gray-900 rounded focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          rows={4}
          placeholder=""
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3">Estado:</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setCompleted(true)}
            className={`flex-1 px-4 py-2 rounded font-medium border transition-all ${
              completed
                ? "bg-green-600 text-white border-green-600 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
            }`}
          >
            Completo
          </button>
          <button
            type="button"
            onClick={() => setCompleted(false)}
            className={`flex-1 px-4 py-2 rounded font-medium border transition-all ${
              !completed
                ? "bg-white text-gray-900 border-gray-900 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
            }`}
          >
            Incompleto
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2.5 rounded font-medium border-2 border-gray-900 bg-white text-gray-900 hover:bg-gray-50 transition-colors mt-2"
      >
        Enviar
      </button>
    </form>
  );
}
