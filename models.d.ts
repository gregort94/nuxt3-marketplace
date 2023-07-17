import { ProductColor } from 'enums'

export interface ApiProduct {
  productId: number
  productName: string
  productImage: string
  productPrice: string
  productSalePrice: string
  rating: number
}

export interface ProductFilters {
  colors: ProductColor[]
}
