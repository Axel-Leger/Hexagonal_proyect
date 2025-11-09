import { useMemo } from "react"
import { useNoteContext } from "../../../context/NoteContext"
import { NoteApiService } from "../../../Notes/infrastructure/NoteApiService"
import { DeleteNoteUseCase } from "../../../Notes/application/DeleteNoteUseCase"

export interface CourseIdProp{
    id: string  
}

export default function ButtonDeleteNote({id}:CourseIdProp){    
    const {setResfrecarNote} = useNoteContext()

    const noteServise = useMemo(()=> new NoteApiService(),[])
    const DeleteNoteCase = useMemo(()=> new DeleteNoteUseCase(noteServise),[noteServise]) 
    

       const handleDeleteNote = async ()=>{
        
        try {
            await DeleteNoteCase.execute(id)
            setResfrecarNote((prev) => !prev);
        } catch (error) {
            console.error("Error al eliminar la nota");
        }
    }



    return(
        <button className="rounded font-semibold px-4 bg-red-300" onClick={handleDeleteNote}>
            Eliminar
        </button>
    )
}


