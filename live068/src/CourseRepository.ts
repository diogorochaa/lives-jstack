import { randomUUID } from 'node:crypto';

import { ICourseRepository } from './ICourseRepository';
import { Course } from './types/Course';

export class CourseRepository implements ICourseRepository {
  async findById(courseId: string): Promise<Course | null> {
    console.log(`> Searching course ${courseId} in the database...`);
    
    return {
      id: randomUUID(),
      name: `course - ${Math.random()}`,
      createdAt: new Date(),
      isPublished: true,
    };
  }
  
  async findByName(courseName: string): Promise<Course | null> {
    console.log(`> Searching course "${courseName}" in the database...`);

    return {
      id: randomUUID(),
      name: courseName,
      createdAt: new Date(),
      isPublished: true,
    };
  }

  async create(name: string): Promise<Course> {
    console.log('> Saving course to database...');

    return {
      id: randomUUID(),
      name: name,
      createdAt: new Date(),
      isPublished: true,
    };
  }
}
