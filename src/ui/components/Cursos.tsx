import { useEffect, useState } from "react"
import { GetCourseUseCase } from "../../application/Courses/GetCourseUseCase"
import CourseApiService from "../../infrastructure/api/CourseApiService"
import { useAuthStatus } from "../../context/AuthContext"
import type { Courses } from "../../domain/Courses/Courses"


export function Cursos() {
    const {user} = useAuthStatus()
    const [cursos, setCourses] = useState<Courses[]>([])
    
    const courseService = new CourseApiService()
    const courseCase = new GetCourseUseCase(courseService)

    useEffect(()=>{

         if (!user) return;

        const TrearCursos = async () =>{
            try {
                const resCourses = await courseCase.execute(user.id)

                setCourses(resCourses)
                console.log(resCourses);
                
            } catch (error) {
                console.error("Error al trear los cursos", error);
                
            }
        }

        TrearCursos()
    },[user])
    
    
    return(
        <div className="">
            cursos uwu
        </div>
    )
}