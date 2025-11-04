// Archivo: src/infrastructure/api/dtos/TaskFromApi.dto.ts
//
// Propósito: Define la estructura EXACTA de una tarea
// tal como la devuelve la API del backend.
// Esto nos aísla de cambios en el backend.

export interface TaskFromApiDTO {
  // Nombres de campos como en la API (ej: snake_case)
  task_id: string;
  task_title: string;
  is_completed: boolean;
  assigned_to_user_id: string | null;

  // Campos extra que la API puede enviar pero que
  // nuestro 'core' no necesita.
  created_at: string;
  updated_at: string;
}

// (Opcional, pero recomendado)
// DTO para crear/actualizar una tarea.
// Lo que la API espera recibir en un POST o PATCH.
export interface UpsertTaskApiDTO {
  task_title: string;
  assigned_to: string | null;
  is_completed?: boolean;
}