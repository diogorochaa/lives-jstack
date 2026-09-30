import z from 'zod';

const schema = z.email();

export function validateEmail(email: string): boolean {
  return schema.safeParse(email).success;
}
