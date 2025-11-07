import type { Note } from "../../domain/Note";  
import type { NoteRepository } from "../../domain/NoteRepository"; 

const API_URL = 'http://localhost:3000/api/notes';

export class NoteApiService implements NoteRepository {
  
async getNoteId(id: string): Promise<Note[]> {
  const res = await fetch(`${API_URL}/${id}`)

  const data = await res.json()

  return data
}
}