import type { CoursesFront } from "../domain/Courses";
import type { CoursesRepository } from "../domain/CoursesRepository";

export class GetCourseUseCase {
    private courseRepo: CoursesRepository;
    
    constructor(courseRepo: CoursesRepository){
        this.courseRepo = courseRepo
    }

    async execute(userId:string): Promise<CoursesFront[]>{
        return this.courseRepo.getCourse(userId)
    }
}