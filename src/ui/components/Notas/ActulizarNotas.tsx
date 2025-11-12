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
    const [abiertoAct, setAbiertoAct]= useState(false)

    const {notas, tagList, setResfrecarNote} = useNoteContext()


     useEffect(() => {
        if (abiertoAct) {
        const notaActual = notas.find((n) => n.id === id);
        if (notaActual) {
            setAnnotations(notaActual.annotations || "");
            setTags(notaActual.tags || []);
        }
        }
    }, [abiertoAct, id, notas]);
    

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
            setAbiertoAct(false)
            setResfrecarNote((prev) => !prev);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
        <button className="bg-indigo-300 px-2 text-sm rounded cursor-pointer " onClick={()=>setAbiertoAct(!abiertoAct)}>Editar</button>
        
        
        <form onSubmit={handlePutNote} className={`px-4 text-start text-sm rounded fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 w-[400px]  py-2 flex flex-col gap-3 
            ${abiertoAct ? "opacity-100":"opacity-0 pointer-events-none"}`}>

                   
                   <div className="flex mt-1 flex-col gap-1">
                       <p className="font-semibold">Anotacion:</p>
                       <textarea
                           className="border h-40 rounded px-3 py-1"
                           value={annotations}
                           onChange={(e) => setAnnotations(e.target.value)}
                           placeholder="Nombre del curso" />
                   </div>
       
                    <div className="space-y-2">
                       <p className=" font-semibold">Etiquetas:</p>
                       
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
       
                <div className=" flex  gap-2 my-2">
                   <Button 
                        variant={["pequeño", "danger"]}
                        type="button" onClick={()=>setAbiertoAct(!abiertoAct)} className="w-full py-2  font-semibold rounded bg-red-400 cursor-pointer hover:bg-red-500 transition-all duration-300 transform hover:scale-[1.02]">
                        Cancelar
                   </Button>
                   <Button 
                        variant={["pequeño", "default"]}
                        className="w-full py-2  font-semibold rounded bg-indigo-400 cursor-pointer hover:bg-indigo-500 transition-all duration-300 transform hover:scale-[1.02]" type="submit">
                       Actualizar
                   </Button>

                   
                </div>
        </form>
        </>
    )
}