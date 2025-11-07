import type { Courses } from "../../domain/Courses/Courses";
import type { CoursesRepository } from "../../domain/Courses/CoursesRepository";

const API_URL = "http://localhost:3000/api/courses"

export default class CourseApiService implements CoursesRepository {

    async createCourse(course: Omit<Courses, "createdAt" | "updatedAt">): Promise<Courses> {
        
        const res = await fetch(`${API_URL}`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(course)
        })

        if(!res.ok){
            throw new Error("Error al crear el curso")
        }

        const data: Courses = await res.json()

        return data
    }

    async getCourse(id: string): Promise<Courses[]> {
        const res = await fetch(`${API_URL}`,{
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(id)
        })

        if(!res.ok) throw new Error("Error al traer los cursos")

         return await res.json()
    }
}