import type { NoteRepository } from "../domain/NoteRepository";

export class PutNoteUseCase {
    private noteRepo: NoteRepository;
    
    constructor(noteRepo: NoteRepository){
        this.noteRepo = noteRepo
    }

    async execute(
        id:string,
        data: {annotations: string, tags: string[]}
    ): Promise<void>{
        return this.noteRepo.PutNote(id,data)
    }
}