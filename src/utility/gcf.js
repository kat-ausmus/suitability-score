/**
 * Greatest common factor
 * @param first - first number
 * @param second - second number
 * @returns gcf value
 */
export const gcf = (first, second) => {
  if (second === 0) {
    return first;
  }
  return gcf(second, first % second);
};
