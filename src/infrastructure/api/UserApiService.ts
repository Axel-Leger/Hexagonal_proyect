import type { User } from "../../../domain/User"; 
import type { UserRepository } from "../../../domain/UserRepository";

const API_URL = 'http://localhost:3000/users';

export class UserApiService implements UserRepository {
  async getAll(): Promise<User[]> {
    const res = await fetch(API_URL);
    return res.json();
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return res.json();
  }

  async delete(id: string): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
}