import { useMemo } from "react"
import CourseApiService from "../../../Courses/infrastructure/CourseApiService"
import { DeleteCourseUseCase } from "../../../Courses/application/DeleteCoursesUseCase"
import { useCoursesContext } from "../../../context/CoursesContext"


export interface CourseIdProp{
    id: string  
}


export default function ButtonDeleteCourse({id}: CourseIdProp){
        const {setResfrecar}= useCoursesContext()
    

       const courseService = useMemo(()=> new CourseApiService(), []) 
        const DeleteCourseCase = useMemo(()=> new DeleteCourseUseCase(courseService),[courseService]) 
        
        // ELIMINAR CURSO
        const handleDeleteCourse = async ()=>{
            
            try {
    
                await DeleteCourseCase.execute(id)
                setResfrecar((prev) => !prev);
            } catch (error) {
                console.error("Error al eliminar el curso");
            }
        }
    


    return(
        <button className="rounded font-semibold px-4 bg-red-300" onClick={handleDeleteCourse}>
            Eliminar
        </button>
    )
}