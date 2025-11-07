import type { Courses } from "./Courses";

export interface CoursesRepository {
    createCourse(course: Omit<Courses, "createdAt" | "updatedAt"> ): Promise<Courses>
    getCourse(userId:string): Promise<Courses[]>
}