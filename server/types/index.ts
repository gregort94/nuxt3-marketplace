type Stringify<T> = T extends undefined
  ? undefined
  : T extends Array<unknown>
    ? string[] | string
    : string

export type StringifyQuery<
  T extends Record<string, MaybeArray<string | number | boolean>>,
> = {
  [K in keyof T]: Stringify<T[K]>
}
