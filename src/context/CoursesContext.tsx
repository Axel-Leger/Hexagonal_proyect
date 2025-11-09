import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useAuthStatus } from "./AuthContext";
import CourseApiService from "../Courses/infrastructure/CourseApiService";
import { CreateCourseUseCase } from "../Courses/application/CreateCoursesUseCase";
import { GetCourseUseCase } from "../Courses/application/GetCourseUseCase";
import type { CoursesFront } from "../Courses/domain/Courses";
import type { CourseContextType } from "./typesCourse";

interface CoursesProviderProps {
    children: ReactNode
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CoursesProvider({children}: CoursesProviderProps){

    // formulario
    const [name, setName] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const {user} = useAuthStatus() 


    // lista de cursos
    const [cargando, setCargando] = useState(true)
    const [cursos, setCourses] = useState<CoursesFront[]>([])

    // constante para recargar las lista de cursos cada que se envia el formulario
    const [refrescar, setResfrecar] = useState(false)
    
    // constantes del servicio y de los casos de uso
    const courseService = useMemo(()=> new CourseApiService(), []) 
    const GetCourseCase = useMemo(()=> new GetCourseUseCase(courseService),[courseService]) 
    const CreateCourseCase = useMemo(()=> new CreateCourseUseCase(courseService),[courseService]) 
    
    // FORMULARIO
        const handleCourse = async (e: React.FormEvent)=>{
            e.preventDefault()
    
            try {
    
                if(!user){
                    throw new Error("No hay usuario autenticado")
                }
    
                await CreateCourseCase.execute({
                    name,
                    isCompleted,
                    userId: user.id
                })
    
                console.log("Curso creado con exito");
                setName("")
                setIsCompleted(false)

                setResfrecar((prev) => !prev);
                
            } catch (error) {
                console.error("Error al crear curso", error);
            }
    
        }

    // TRAER LISTA DE CURSOS 
        const TrearCursos = async () =>{
            
           
            if (!user) return;
            try {
                const resCourses = await GetCourseCase.execute(user.id)
                setCourses(resCourses)                
                
            } catch (error) {
                console.error("Error al trear los cursos", error);        
            }
            finally{
                setCargando(false)
            }
        }
    
      
    useEffect(()=>{
        TrearCursos()
    },[user, refrescar])    
        
    

    return(
        <CourseContext.Provider value={{name, setName, handleCourse, setIsCompleted,isCompleted, cargando, cursos, setResfrecar}}>
            {children}
        </CourseContext.Provider>
    )
}

export function useCoursesContext(): CourseContextType{
    const context =  useContext(CourseContext)

    if(!context){
        throw new Error("useCoursesContext debe usarse dentro de un CoursesProvider")
    }
    
    return context
}