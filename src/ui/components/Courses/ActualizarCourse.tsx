import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import CourseApiService from "../../../Courses/infrastructure/CourseApiService";
import { PutCourseUseCase } from "../../../Courses/application/PutUseCase";
import { useCoursesContext } from "../../../context/CoursesContext";
import { Input } from "../../shared/Input";
import ButtonCompletoIncompleto from "./ButonsIncomComplet";

interface PutProps {
    cursoid :string
}

export function ActualizarCurso({cursoid}:PutProps){
    const [name, setName] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const [abierto, setAbierto]= useState(false)
    const {cursos,setResfrecar} = useCoursesContext()

    const courseServise = new CourseApiService()
    const putCourseCase = new PutCourseUseCase(courseServise)

    // Rellena los campos con la info actual
    useEffect(() => {
        if (abierto) {
            const cursoActual = cursos.find((n) => n.id === cursoid);
            if (cursoActual) {
                setName(cursoActual.name || "");
                setIsCompleted(cursoActual.isCompleted || false);
            }
        }
    }, [abierto, cursoid, cursos]);
        

    // accion para cambiar curso
    const handlePutCourse = async (e: React.FormEvent)=>{
        e.preventDefault()

        try {         
            
            if(!cursoid) throw new Error("no se encuentra el curso")
            
            await putCourseCase.execute(cursoid,{
                name,
                isCompleted
            })
            
            setName("")
            setIsCompleted(false)
            setAbierto(false)
            setResfrecar((prev) => !prev);
            
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <>
        <button className="bg-indigo-400 px-3 rounded font-semibold" onClick={()=>setAbierto(!abierto)}>Editar</button>
        
        {abierto && <div className="bg-black/50 backdrop-blur-xs fixed w-full h-full top-0 left-0 z-20"/>}
        
        <form onSubmit={handlePutCourse} className={`px-4 rounded fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 py-2 flex flex-col gap-3 
            ${abierto ? "opacity-100":"opacity-0 pointer-events-none"}`}>
                    <Input 
                        label="Nombre:"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre del curso" />
                   
                    <ButtonCompletoIncompleto label="Estado:" />
       
            <div className="" >
                <Button variant={["default", "pequeño"]} type="submit">
                    Actualizar
                </Button>
                <Button variant={["danger", "pequeño"]} type="button" onClick={()=> setAbierto(false)}>
                    Cancelar
                </Button>
            </div>
        </form>
        </>
    )
}