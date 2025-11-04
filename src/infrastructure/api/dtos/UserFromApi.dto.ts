// Archivo: src/infrastructure/api/dtos/UserFromApi.dto.ts
//
// Propósito: Define la estructura de un usuario de la API.
// Para este ejemplo, asumiremos que la API de usuarios
// SÍ COINCIDE con el modelo del 'core', por lo que este
// archivo podría omitirse.
//
// PERO, si la API de usuarios fuera diferente, se vería así:

export interface UserFromApiDTO {
  user_uuid: string;
  full_name: string;
  email_address: string;
  account_status: 'active' | 'inactive';
}