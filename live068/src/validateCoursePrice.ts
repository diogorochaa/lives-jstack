export function validateCoursePrice(price: number) {
  if (price < 0) {
    throw new Error('Price cannot be a negative number');
  }

  return true;
}
