export {}

declare global {
  type Maybe<T> = T | null | undefined
  type MaybeArray<T> = T | T[]
  type PartialFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
  type ModelToCreate<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>
  type ObjectValues<T> = T[keyof T]
  type Primitive = number | string | boolean
  type Nullish = undefined | null
}
