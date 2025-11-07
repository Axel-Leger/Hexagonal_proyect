import type { Courses } from "../../domain/Courses/Courses";
import type { CoursesRepository } from "../../domain/Courses/CoursesRepository";

export class GetCourseUseCase {
    private courseRepo: CoursesRepository;
    
    constructor(courseRepo: CoursesRepository){
        this.courseRepo = courseRepo
    }

    async execute(id:string): Promise<Courses[]>{
        return this.courseRepo.getCourse(id)
    }
}