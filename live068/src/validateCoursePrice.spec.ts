import { expect, it } from 'vitest';
import { validateCoursePrice } from './validateCoursePrice';

it('should return true for valid prices', () => {
  const isValid = validateCoursePrice(0);

  expect(isValid).toBe(true);
});

it('should throw if a negative number is provided', () => {
  const runValidateCoursePrice = () => validateCoursePrice(-10)

  expect(runValidateCoursePrice).toThrow(
    new Error('Price cannot be a negative number')
  );
});
