import type { Note } from "../../domain/Note";
import type { NoteRepository } from "../../domain/NoteRepository";

export class NoteUseCase {
    private noteRepo: NoteRepository;
    
    constructor(noteRepo: NoteRepository){
        this.noteRepo = noteRepo
    }

    async execute(id: string): Promise<Note[]>{
        return this.noteRepo.getNoteId(id)
    }
}