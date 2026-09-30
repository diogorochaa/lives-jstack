import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CourseRepository } from './CourseRepository';

vi.useFakeTimers();
vi.setSystemTime(new Date(2026, 0, 19));

vi.mock('node:crypto', async () => {
  const crypto = await vi.importActual<typeof import('node:crypto')>('node:crypto');

  return {
    ...crypto,
    randomUUID: vi.fn().mockReturnValue('mocked-id' as any),
  };
});

describe('findById', () => {
  let sut: CourseRepository;

  beforeEach(() => {
    sut = new CourseRepository();
  });

  it('should return course on success', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(123);
    const id = 'valid-id';

    const course = await sut.findById(id);

    expect(course).toEqual({
      id: 'mocked-id',
      createdAt: new Date(),
      isPublished: true,
      name: 'course - 123',
    });
  });
});
