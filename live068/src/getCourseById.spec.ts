import { describe, expect, it, vi } from 'vitest';

import { makeCourseMock } from '@tests/factories/makeCourseMock';

import { CourseRepository } from './CourseRepository';
import { getCourseById } from './getCourseById';

const courseMock = makeCourseMock();

describe('getCourseById', () => {
  const findByIdMock = vi
    .spyOn(CourseRepository.prototype, 'findById')
    .mockResolvedValue(courseMock);

  it('should return the course on success', async () => {
    const course = await getCourseById('course-123');

    expect(course).toEqual(courseMock);
  });

  it('should call findById correctly', async () => {
    await getCourseById('any-id');

    expect(findByIdMock).toHaveBeenCalledOnce();
    expect(findByIdMock).toHaveBeenCalledWith('any-id');
  });

  it('should throw if course id is empty', async () => {
    const coursePromise = getCourseById('');

    await expect(coursePromise).rejects.toThrow(new Error('Invalid course id'));
  });

  it('should return null if course is not published', async () => {
    findByIdMock.mockResolvedValueOnce(makeCourseMock({ isPublished: false }));

    const course = await getCourseById('course-123');

    expect(course).toBeNull();
  });

  it('should throw if the course was not found', async () => {
    findByIdMock.mockResolvedValueOnce(null);

    const coursePromise = getCourseById('course-123');

    await expect(coursePromise).rejects.toThrow(new Error('Course not found'));
  });
});
