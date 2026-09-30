import { ICourseRepository } from './ICourseRepository';

type CreateCourseInput = {
  name: string;
}

export function makeCreateCourse(courseRepo: ICourseRepository) {
  return async ({ name }: CreateCourseInput) => {
    if (!name.trim()) {
      throw new Error('Name is required');
    }

    const nameIsAlreadyInUse = await courseRepo.findByName(name);
    if (nameIsAlreadyInUse) {
      throw new Error('Name is already in use');
    }

    const course = courseRepo.create(name);

    return course;
  }
}

export type CreateCourseFn = ReturnType<typeof makeCreateCourse>;
