export interface Product {
  id: string
  name: string
  price: number
  rating: number
  images: { url: string }[]
  primaryImage: { url: string }
}
