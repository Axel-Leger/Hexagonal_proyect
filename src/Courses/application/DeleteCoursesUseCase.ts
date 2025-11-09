import type { CoursesRepository } from "../domain/CoursesRepository";

export class DeleteCourseUseCase {
    private courseRepo: CoursesRepository;
    
    constructor(courseRepo: CoursesRepository){
        this.courseRepo = courseRepo
    }

    async execute(id:string): Promise<void>{
        return this.courseRepo.deleteCourse(id)
    }
}