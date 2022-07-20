/**
 * Pagination function
 * @param page
 * @param size
 * @returns
 */
export const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
