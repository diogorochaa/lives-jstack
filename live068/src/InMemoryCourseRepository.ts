import { randomUUID } from 'node:crypto';
import { ICourseRepository } from './ICourseRepository';
import { Course } from './types/Course';

export class InMemoryCourseRepository implements ICourseRepository {
  private courses: Course[] = [];

  async findById(courseId: string): Promise<Course | null> {
    return this.courses.find(course => course.id === courseId) ?? null;
  }

  async findByName(courseName: string): Promise<Course | null> {
    return this.courses.find(course => course.name === courseName) ?? null;
  }

  async create(name: string): Promise<Course> {
    const course: Course = {
      id: randomUUID(),
      name,
      isPublished: true,
      createdAt: new Date(),
    };

    this.courses.push(course);

    return course;
  }
}