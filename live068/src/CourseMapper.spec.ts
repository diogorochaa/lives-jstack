import { describe, expect, it } from 'vitest';

import { CourseMapper } from './CourseMapper';

describe('CourseMapper', () => {
  describe('toDomain', () => {
    it('should convert an CourseAPI to an CourseDomain', async () => {
      const course = CourseMapper.toDomain({
        course: {
          name: 'Curso de React',
          tags: ['React'],
        },
      });

      expect(course).toEqual({
        name: 'Curso de React',
        tags: ['React'],
      });
    });

    it('should create an empty array when tags are not provided', () => {
      const course = CourseMapper.toDomain({
        course: {
          name: 'Curso de React',
        },
      });

      expect(course).toEqual({
        name: 'Curso de React',
        tags: [],
      });
    });
  })

  describe('toAPI', () => {
    it('should convert an CourseDomain to an CourseAPI', () => {
      const course = CourseMapper.toAPI({
        name: 'Curso de React',
        tags: ['React'],
      });

      expect(course).toEqual({
        course: {
          name: 'Curso de React',
          tags: ['React'],
        },
      });
    });
  })
})
