import type { NoteRepository } from "../domain/NoteRepository";

export class DeleteNoteUseCase {
    private noteRepo: NoteRepository;
    
    constructor(noteRepo: NoteRepository){
        this.noteRepo = noteRepo
    }

    async execute(id: string): Promise<void>{
        return this.noteRepo.DeleteNote(id)
    }
}