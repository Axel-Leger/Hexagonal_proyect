import type { Courses, CoursesFront } from "../domain/Courses";
import type { CoursesRepository } from "../domain/CoursesRepository";

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

    async getCourse(userId: string): Promise<CoursesFront[]> {
        const res = await fetch(`http://localhost:3000/api/courses?userId=${userId}`)

        if(!res.ok) throw new Error("Error al traer los cursos")

        const cursosArray = await res.json()

        const cursos = cursosArray.courses
        
        return cursos
    }

    async deleteCourse(id: string): Promise<void> {
        const res = await fetch(`${API_URL}/${id}`,{
            method: "DELETE"
        })

        if(!res.ok) {
            throw new Error("Error al eliminar el curso")
        } else{
            console.log("Curso eliminado correctamente");
        }
        
    }


    async putCourse(id: string, data: {name: string, isCompleted: boolean}): Promise<void> {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        if(!res.ok) {
            throw new Error("Error al actualizar el curso")
        } else{
            console.log("Curso actualizado correctamente");
        }
    }
}
