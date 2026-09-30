import { CourseRepository } from './CourseRepository';

export async function getCourseById(courseId: string) {
  const courseRepo = new CourseRepository();

  if (!courseId.trim()) {
    throw new Error('Invalid course id');
  }

  const course = await courseRepo.findById(courseId);

  if (!course) {
    throw new Error('Course not found');
  }

  if (!course.isPublished) {
    return null;
  }

  return course;
}
