import type { Note, NoteFront } from "./Note";

export interface  NoteRepository {
  creteNote(note: Note): Promise<void>
  getNote(courseId: string): Promise<NoteFront[]>
  DeleteNote(id:string):Promise<void>
  PutNote(id:string, data:{annotations: string, tags: string[]}):Promise<void>
}
