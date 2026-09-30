import { expect, it } from 'vitest';

import { sum } from './sum';

it('should return 2 when given 1 + 1', () => {
  const result = sum(1, 1);

  expect(result).toBe(2);
});

it('should return 0 when the result is NaN', () => {
  const result = sum(1, NaN);

  expect(result).toBe(0);
});
