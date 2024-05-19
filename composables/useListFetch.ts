export default <T>(
  url: string,
  filters?: Record<string, MaybeArray<string | number> | undefined | boolean>,
  itemsPerPage: number = 20,
) => {
  type ApiResponse = { list: T[]; total?: number }

  const list = ref<T[]>()

  const total = ref<number>()
  const isTotalReached = computed(() => list.value?.length === total.value)
  const itemsRemain = computed(
    () => list.value && total.value && total.value - list.value.length,
  )

  const isLoading = ref(false)
  const fetchList = async () => {
    isLoading.value = true
    try {
      const response = await $fetch<ApiResponse>(url, {
        query: {
          ...filters,
          count: true,
          take: itemsPerPage,
        },
      })
      list.value = response.list
      total.value = response.total
    } finally {
      isLoading.value = false
    }
  }

  fetchList()

  if (filters && isReactive(filters)) {
    watch(filters, () => {
      fetchList()
    })
  }
  const isAdding = ref(false)
  const addItems = async () => {
    if (isTotalReached.value) return

    isAdding.value = true
    try {
      const response = await $fetch<ApiResponse>(url, {
        query: {
          ...(filters || {}),
          take: itemsPerPage,
          skip: list.value?.length,
        },
      })
      ;(list.value as T[]).push(...response.list)
    } finally {
      isAdding.value = false
    }
  }

  return {
    isLoading,
    isAdding,
    list,
    fetchList,
    addItems,
    total,
    isTotalReached,
    itemsRemain,
  }
}
