import type { UserContext } from "../AuthUsers/domain/User"
import type { CoursesFront } from "../Courses/domain/Courses";

export interface AuthContextType{
    user: UserContext | null
    setUser: React.Dispatch<React.SetStateAction<UserContext | null>>
}

export interface CourseContextType {

    // formulario
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>
    handleCourse: (e: React.FormEvent) => Promise<void>
    isCompleted:boolean
    setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
    
    // listado de cursos
    cargando:boolean
    cursos: CoursesFront[]

    
    // refrescar lista
    setResfrecar:React.Dispatch<React.SetStateAction<boolean>>
}




