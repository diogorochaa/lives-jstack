import { beforeEach, expect, it, vi } from 'vitest';

import { CreateCourseFn, makeCreateCourse } from './createCourse';
import { InMemoryCourseRepository } from './InMemoryCourseRepository';

vi.useFakeTimers();
vi.setSystemTime(new Date(2026, 0, 12));

let sut: CreateCourseFn;

beforeEach(() => {
  const courseRepo = new InMemoryCourseRepository();
  sut = makeCreateCourse(courseRepo);
});

it('should return the course object on success', async () => {
  const course = await sut({ name: 'Curso de Testes' });

  expect(course).toEqual({
    id: expect.any(String),
    name: 'Curso de Testes',
    createdAt: new Date(),
    isPublished: true,
  });
});

it('should throw if no name is provided', async () => {
  const coursePromise = sut({ name: '' });

  await expect(coursePromise).rejects.toThrow(new Error('Name is required'));
});

it('should throw if name is already in use', async () => {
  await sut({ name: 'any name' });

  const coursePromise = sut({ name: 'any name' });

  await expect(coursePromise).rejects.toThrow(new Error('Name is already in use'));
});
