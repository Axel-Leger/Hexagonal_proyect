import type {  Note } from "../domain/Note";
import type { NoteRepository } from "../domain/NoteRepository";

export class CreateNoteUseCase {
    private noteRepo: NoteRepository;
    
    constructor(noteRepo: NoteRepository){
        this.noteRepo = noteRepo
    }

    async execute(note: Note): Promise<void>{
        return this.noteRepo.creteNote(note)
    }
}