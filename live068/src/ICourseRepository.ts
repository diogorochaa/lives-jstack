import { Course } from './types/Course';

export interface ICourseRepository {
  findById(courseId: string): Promise<Course | null>;
  findByName(courseName: string): Promise<Course | null>;
  create(name: string): Promise<Course>;
}
