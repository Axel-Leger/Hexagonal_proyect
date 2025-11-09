import type { Courses, CoursesFront } from "./Courses";

export interface CoursesRepository {
    createCourse(course: Omit<Courses, "createdAt" | "updatedAt"> ): Promise<Courses>
    getCourse(userId:string): Promise<CoursesFront[]>
    deleteCourse(id:string):Promise<void>
    putCourse(
        id:string,
        data: {name: string, isCompleted: boolean}
    ):Promise<void>
}