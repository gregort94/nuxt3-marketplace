import { useRouteQuery } from '@vueuse/router'

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
} satisfies { [K in TypeName]: (value: string) => any }

function useCustomRouteQuery<
  T extends TypeName,
  U extends TypeMap[T] = TypeMap[T],
>(name: string, type: T): Ref<U | undefined>

function useCustomRouteQuery<
  T extends TypeName,
  U extends TypeMap[T] = TypeMap[T],
>(name: string, type: T, multiple: true): Ref<U[] | undefined>

function useCustomRouteQuery(name: string, type: TypeName, multiple?: boolean) {
  const result = useRouteQuery(name, undefined, {
    transform: (val) => {
      const value = val as string | string[] | undefined

      if (value === undefined) return value

      const transformFunction = TRANSFORM_BY_TYPE[type]

      if (multiple) {
        const values = Array.isArray(value) ? value : [value]
        return values.map((value) => transformFunction(value))
      }

      return transformFunction(value as string)
    },
  })
  return result
}
export default useCustomRouteQuery
