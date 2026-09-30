import { Course } from '@/types/Course';

export function makeCourseMock(props?: Partial<Course>): Course {
  return {
    id: 'valid-id',
    name: 'valid name',
    createdAt: new Date(),
    isPublished: true,
    ...props,
  };
}
