import { ApiProduct } from '../../models'
import data from './products.json'
const products: ApiProduct[] = data

export default defineEventHandler((event) => {
  const query = getQuery(event)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 5000)
  })
})
