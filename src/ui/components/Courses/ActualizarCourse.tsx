import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import CourseApiService from "../../../Courses/infrastructure/CourseApiService";
import { PutCourseUseCase } from "../../../Courses/application/PutUseCase";
import { useCoursesContext } from "../../../context/CoursesContext";

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


    // funciones para cambiar el estado de verdadero o falso
    const handleCompleto = ()=>{
        setIsCompleted(true)
    }
    
        
    const handleIncompleto = ()=>{
        setIsCompleted(false)
    }


    return(
        <>
        <button className="bg-blue-500 px-3 rounded font-semibold" onClick={()=>setAbierto(!abierto)}>Editar</button>
        
        {abierto && <div className="bg-black/50 backdrop-blur-xs fixed w-full h-full top-0 left-0 z-20"/>}
        
        <form onSubmit={handlePutCourse} className={`px-4 fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-200 py-2 flex flex-col gap-3 
            ${abierto ? "opacity-100":"opacity-0 pointer-events-none"}`}>
                   <div className="flex flex-col">
                       <label>Nombre:</label>
                       <input 
                           className="border rounded px-3 py-1"
                           type="text" 
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Nombre del curso" />
                   </div>
       
                    <div className="">
                       <label>Estado:</label>
                       <div className="flex gap-2 justify-center [&>button]:border [&>button]:px-3">
                           <button className={`${isCompleted === true ? "bg-green-500":""}`}
                               type="button"
                               onClick={handleCompleto} >
                               Completo
                           </button>
                           <button className={`${isCompleted === false ? "bg-red-300":""}`}
                               type="button"
                               onClick={handleIncompleto}>
                               Incompleto
                           </button>
                       </div>
                   </div>
       
                   <Button className="bg-red-300 border" type="submit">
                       Actualizar
                   </Button>
                   <Button className="bg-red-300 border" type="button" onClick={()=> setAbierto(false)}>
                        Cancelar
                   </Button>
        </form>
        </>
    )
}