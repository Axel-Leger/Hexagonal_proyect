import type {  NoteFront } from "../domain/Note";
import type { NoteRepository } from "../domain/NoteRepository";

export class GetNoteUseCase {
    private noteRepo: NoteRepository;
    
    constructor(noteRepo: NoteRepository){
        this.noteRepo = noteRepo
    }

    async execute(courseId: string): Promise<NoteFront[]>{
        return this.noteRepo.getNote(courseId)
    }
}