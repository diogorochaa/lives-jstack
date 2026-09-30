export function sum(a: number, b: number) {
  const result = a + b;

  if (isNaN(result)) {
    return 0;
  }

  return result;
}
