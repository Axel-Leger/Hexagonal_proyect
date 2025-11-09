import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import { useNoteContext } from "../../../context/NoteContext";
import { NoteApiService } from "../../../Notes/infrastructure/NoteApiService";
import { PutNoteUseCase } from "../../../Notes/application/PutNoteUseCase";
import { ButtonNote } from "./ButtonTag";


export interface ActualizarNotas {
    id: string
}


export function ActualizarNotas({id}:ActualizarNotas){
    const [annotations, setAnnotations] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [abierto, setAbierto]= useState(false)

    const {notas, tagList, setResfrecarNote} = useNoteContext()


     useEffect(() => {
        if (abierto) {
        const notaActual = notas.find((n) => n.id === id);
        if (notaActual) {
            setAnnotations(notaActual.annotations || "");
            setTags(notaActual.tags || []);
        }
        }
    }, [abierto, id, notas]);
    

    const handleTagClick = (tag: string) => {
        setTags((prev) =>
          prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
      };


    const noteServise = new  NoteApiService()
    const putNoteCase = new PutNoteUseCase(noteServise)

    const handlePutNote = async (e: React.FormEvent)=>{
        e.preventDefault()
        try {         
            if(!id) throw new Error("no se encuentra el curso")
            
            await putNoteCase.execute(id,{
                annotations,
                tags
            })
            
            setAnnotations("")
            setTags([])
            setAbierto(false)
            setResfrecarNote((prev) => !prev);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
        <button className="bg-blue-500 px-3 rounded font-semibold" onClick={()=>setAbierto(!abierto)}>Editar</button>
        
        {abierto && <div onClick={()=>setAbierto(false)} className="bg-black/50 backdrop-blur-xs fixed w-full h-full top-0 left-0 z-20"/>}
        
        <form onSubmit={handlePutNote} className={`px-4 fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100  py-2 flex flex-col gap-3 
            ${abierto ? "opacity-100":"opacity-0 pointer-events-none"}`}>
                   <div className="flex flex-col gap-1">
                       <p className="text-lg font-semibold">Anotacion:</p>
                       <textarea 
                           className="border h-30 overflow-hidden rounded px-3 py-1"
                           value={annotations}
                           onChange={(e) => setAnnotations(e.target.value)}
                           placeholder="Nombre del curso" />
                   </div>
       
                    <div className="space-y-2">
                       <p className="text-lg font-semibold">Etiquetas:</p>
                       
                       <div className="flex flex-wrap gap-2 justify-center [&>button]:border [&>button]:px-3">
                            {tagList.map((tag) => (
                                <ButtonNote
                                    key={tag}
                                    texto={tag}
                                    isSelected={tags.includes(tag)}
                                    onClick={() => handleTagClick(tag)}
                                    />
                            ))}
                       </div>
                   </div>
       
                <div className=" space-y-1.5 my-2">
                   <Button className="w-full py-2 text-lg font-semibold rounded-lg
                    bg-gradient-to-r from-indigo-400 to-indigo-500 text-white shadow-md hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-[1.02]" type="submit">
                       Actualizar
                   </Button>
                   <Button className="bg-slate-300  w-full tracking-wide py-2 text-lg  rounded transform transition-transform duration-300 hover:scale-102" type="button" onClick={()=> setAbierto(false)}>
                        Cancelar
                   </Button>
                </div>
        </form>
        </>
    )
}