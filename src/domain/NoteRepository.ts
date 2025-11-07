import type { Note } from "./Note";

export interface  NoteRepository {
  getNoteId(id: string): Promise<Note[]>
}
