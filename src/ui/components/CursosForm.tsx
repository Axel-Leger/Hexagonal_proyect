import { useState } from "react"
import { useAuthStatus } from "../../context/AuthContext"
import { CreateCourseUseCase } from "../../application/Courses/CreateCoursesUseCase"
import CourseApiService from "../../infrastructure/api/CourseApiService"

export function CursosForm(){
    const [name, setName] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const {user} = useAuthStatus() 
    const [estado, setEstado] = useState("completo")
    

    const curseService = new CourseApiService()
    const curseCase = new CreateCourseUseCase(curseService)

    const handleCourse = async (e: React.FormEvent)=>{
        e.preventDefault()

        try {

            if(!user){
                throw new Error("No hay usuario autenticado")
            }

            await curseCase.execute({
                name,
                isCompleted,
                userId: user.id
            })

            console.log("Curso creado con exito");
            setName("")
            setIsCompleted(false)
            
        } catch (error) {
            console.error("Error al crear curso", error);
        }

    }


    const handleCompleto = ()=>{
        setEstado("completo")
         setIsCompleted(true)
    }

    
    const handleIncompleto = ()=>{
        setEstado("incompleto")
        setIsCompleted(false)
    }

    return(
        <form >
            <div className="">
                <label>Nombre:</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del curso" />
            </div>

             <div className="">
                <label>Estado:</label>
                <div className="flex gap-2 [&>button]:border [&>button]:px-3">
                    <button className={`${estado === "completo" ? "bg-green-500":""}`}
                        type="button"
                        onClick={handleCompleto} >
                        Completo
                    </button>
                    <button className={`${estado === "incompleto" ? "bg-red-300":""}`}
                        type="button"
                        onClick={handleIncompleto}>
                        Incompleto
                    </button>
                </div>
            </div>

            <button onClick={handleCourse} type="submit">Enviar</button>
        </form>
    )
}