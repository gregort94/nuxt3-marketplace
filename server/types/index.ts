export type QueryInput<T> = {
  [K in keyof T]: T[K] extends number
    ? string
    : T[K] extends Array<number>
      ? Array<string>
      : T[K]
}
