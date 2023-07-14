import { ApiProduct } from '../../models'
import data from './products.json'
const products: ApiProduct[] = data

export default defineEventHandler((event) => {
  return products
})
