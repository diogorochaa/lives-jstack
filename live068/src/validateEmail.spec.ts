import { expect, it } from 'vitest';
import { validateEmail } from './validateEmail';

it.each([
  '',
  'invalid',
  'invalid@mail',
  'invalid#@email.com',
])('should return false for invalid email: $0', (email) => {
  const isValid = validateEmail(email)

  expect(isValid).toBe(false);
});

it.each([
  { email: 'mateus+obj@jstack.com.br' }
])('should return true for valid email: $email', ({ email }) => {
  const isValid = validateEmail(email)

  expect(isValid).toBe(true);
});

it.each([
  { email: { address: 'mateus+obj-aninhado@jstack.com.br' } }
])('should return true for valid email: $email.address', ({ email }) => {
  const isValid = validateEmail(email.address)

  expect(isValid).toBe(true);
});
