import { useMemo, useState } from "react"
import { useNoteContext } from "../../../context/NoteContext"
import { NoteApiService } from "../../../Notes/infrastructure/NoteApiService"
import { DeleteNoteUseCase } from "../../../Notes/application/DeleteNoteUseCase"

export interface CourseIdProp{
    id: string  
    abierto: string | null;
    setAbierto: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ButtonDeleteNote({id, setAbierto}:CourseIdProp){    
    const {setResfrecarNote} = useNoteContext()
    const [abrirMensaje, setAbrirMensaje] = useState(false)

    const noteServise = useMemo(()=> new NoteApiService(),[])
    const DeleteNoteCase = useMemo(()=> new DeleteNoteUseCase(noteServise),[noteServise]) 
    

    const abrirDiv = () =>{
        setAbrirMensaje(!abrirMensaje)
    }


    const handleDeleteNote = async ()=>{
        try {
            await DeleteNoteCase.execute(id)
            setResfrecarNote((prev) => !prev);
            setAbierto(null)
            setAbrirMensaje(false)
        } catch (error) {
            console.error("Error al eliminar la nota");
        }
    }



    return(
        <>
            <button className="rounded text-sm px-3 cursor-pointer bg-red-300" onClick={abrirDiv}>
                Eliminar
            </button>
            <div className={`${abrirMensaje ? "fixed":"hidden"} bg-red-300 w-[400px] text-sm rounded px-4 text-center py-2 space-y-2 -bottom-18 left-0`}>
                <p className="">Estas seguro de que quieres eliminar esta nota?</p>
                <div className=" flex justify-center [&>button]:border [&>button]:w-full [&>button]:cursor-pointer [&>button]:rounded gap-2">
                    <button className="hover:bg-blue-200/60" onClick={abrirDiv}>Cancelar</button>
                    <button className="hover:bg-red-400/60" onClick={handleDeleteNote}>Aceptar</button>
                </div>
            </div>
        </>
    )
}


