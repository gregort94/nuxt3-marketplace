import data from './products.json'
import { ApiProduct } from '@/models'
const products: ApiProduct[] = data

export default defineEventHandler((event) => {
  const query = getQuery(event)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 5000)
  })
})
