export interface Note {
  annotations: string;
  courseId: string;
  tags: string[];
};

export interface NoteFront {
    id: string
    annotations: string 
    courseId: string
    tags: string[]
    createdAt: string 
    updatedAt:  string
  }