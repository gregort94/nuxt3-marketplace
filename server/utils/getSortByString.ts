export const getSortByString = (sort: string) => {
  const [field, order] = sort.split('_')
  return { field, order: order as 'asc' | 'desc' }
}
