import { beforeEach, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { makeCourseMock } from '@tests/factories/makeCourseMock';
import { CreateCourseFn, makeCreateCourse } from './createCourse';
import { ICourseRepository } from './ICourseRepository';

vi.useFakeTimers();
vi.setSystemTime(new Date(2026, 0, 12));

let sut: CreateCourseFn;
const courseRepoMock = mock<ICourseRepository>();

courseRepoMock.create.mockImplementation(async name => ({
  id: 'any-id',
  name,
  createdAt: new Date(),
  isPublished: true,
}));

beforeEach(() => {
  sut = makeCreateCourse(courseRepoMock);
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
  courseRepoMock.findByName.mockResolvedValueOnce(makeCourseMock());

  const coursePromise = sut({ name: 'any name' });

  await expect(coursePromise).rejects.toThrow(new Error('Name is already in use'));
});

it('should call CourseRepository.create correctly', async () => {
  await sut({ name: 'Curso de Testes' });

  expect(courseRepoMock.create).toHaveBeenCalledWith('Curso de Testes');
  expect(courseRepoMock.create).toHaveBeenCalledTimes(1);
});
