import type { CoursesRepository } from "../domain/CoursesRepository";

export class PutCourseUseCase {
    private courseRepo: CoursesRepository;
    
    constructor(courseRepo: CoursesRepository){
        this.courseRepo = courseRepo
    }

    async execute(
        id:string,
        data: {name: string, isCompleted: boolean}
    ): Promise<void>{
        return this.courseRepo.putCourse(id,data)
    }
}