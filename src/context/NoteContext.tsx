import { createContext, useContext, useEffect, useState } from "react";
import { useAuthStatus } from "./AuthContext";
import type { NoteFront } from "../Notes/domain/Note";
import { useParams } from "react-router-dom";
import { NoteApiService } from "../Notes/infrastructure/NoteApiService";
import { GetNoteUseCase } from "../Notes/application/GetNoteUseCase";
import { CreateNoteUseCase } from "../Notes/application/CreateNoteUseCase";
import type { NoteContextType, NoteProviderProps } from "./typesNote";


const NoteContext = createContext<NoteContextType | undefined>(undefined)
   
export function NoteProvider({children}: NoteProviderProps){    
    // trear notas
    const {user} = useAuthStatus()
    const [notas, setNotas] = useState<NoteFront[]>([])

    // form notas
    const [annotations, setAnnotations] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    const {id:courseId} = useParams()
    const [refrescar, setResfrecarNote] = useState(false)
    const [cargando, setCargando] = useState(true)

    const noteservice = new NoteApiService()
    const CreateNoteCase = new CreateNoteUseCase(noteservice)
    const GetnoteCase = new GetNoteUseCase(noteservice)

    // FORM NOTAS   
    
      const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
    
        try {
    
            if(!courseId) throw new Error("No se encontró el ID del curso.");
    
            const noteData =  await CreateNoteCase.execute({
                annotations,
                courseId,
                tags,
            })
    
            console.log("Nota creado con exito", noteData);
            setAnnotations("")
            setTags([])
            setResfrecarNote((prev) => !prev);

            
        } catch (error) {
            console.error("Error al crear nota");
            
        } 
      }
    


    // TREAER LISTA DE NOTAS 
    const TraerNotas= async () =>{
        if(!courseId) return
            try {

                const notasfetch = await GetnoteCase.execute(courseId)
                setNotas(notasfetch)
                
            } catch (error) {
                console.error("Error al trear notas ",error);
                
            }finally{
                setCargando(false)
            }   
        }

    
    const tagList = [
        "Backend",
        "Frontend",
        "Base de Datos",
        "DevOps",
        "Ciberseguridad",
        "React",
        "Docker",
        "Nginx",
        "Node",
        "Js",
        "Python",
        "Sql",
        "NoSql",
        "Express",
      ];
    
    
    useEffect(()=>{
        TraerNotas()
    },[user, refrescar])


    return(
        <NoteContext.Provider value={{notas,cargando,annotations,tags,setTags, handleSubmit,tagList, setAnnotations, setResfrecarNote}}>
            {children}
        </NoteContext.Provider>
    )

}

export function useNoteContext(): NoteContextType{
    const context =  useContext(NoteContext)

    if(!context){
        throw new Error("useNoteContext debe usarse dentro de un NoteProvider")
    }
    
    return context
}