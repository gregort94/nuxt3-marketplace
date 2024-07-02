type TypeMap = {
  string: string
  number: number
  boolean: boolean
}
type TypeName = keyof TypeMap

const TRANSFORM_BY_TYPE = {
  string: (value) => value,
  number: (value) => Number(value),
  boolean: (value) => Boolean(value),
} satisfies { [K in TypeName]: (value: string) => unknown }

export default <
  T extends TypeName,
  U extends TypeMap[T] = TypeMap[T],
  M extends true | undefined = undefined,
>(
  name: string,
  type: T,
  multiple?: M,
) => {
  const route = useRoute()

  const queryObj = computed(() => route.query)

  const query = computed<M extends true ? U[] | undefined : U | undefined>({
    get() {
      const value = queryObj.value[name]

      if (value === undefined) return value

      const transformFunction = TRANSFORM_BY_TYPE[type]

      if (multiple) {
        const values = Array.isArray(value) ? value : [value]
        return values.map((value) => transformFunction(value as string))
      }

      return transformFunction(value as string)
    },
    set(value) {
      navigateTo({
        query: {
          ...queryObj.value,
          [name]: value,
        },
      })
    },
  })
  return query
}
