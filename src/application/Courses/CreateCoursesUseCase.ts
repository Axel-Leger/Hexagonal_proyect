import type { Courses } from "../../domain/Courses/Courses";
import type { CoursesRepository } from "../../domain/Courses/CoursesRepository";

export class CreateCourseUseCase {
    private courseRepo: CoursesRepository;
    
    constructor(courseRepo: CoursesRepository){
        this.courseRepo = courseRepo
    }

    async execute(course: Omit<Courses, "createdAt" | "updatedAt">): Promise<Courses>{
        return this.courseRepo.createCourse(course)
    }
}