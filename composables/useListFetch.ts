export default <T>(
  url: string,
  options: { query?: Ref<{ [key: string]: string | string[] }> },
  itemsPerPage: number = 20,
) => {
  type ApiResponse = { list: T[]; total?: number }

  const data = ref<T[]>()

  const total = ref<number>()
  const totalReached = computed(() => data.value.length === total.value)
  const itemsRemain = computed(() => total.value - data.value.length)

  if (options.query) {
    watch(options.query, () => {
      fetchList()
    })
  }

  const pending = ref(false)
  const fetchList = async () => {
    pending.value = true
    try {
      const { list, total: totalItems } = await $fetch<ApiResponse>(url, {
        query: { ...options.query?.value, take: itemsPerPage, count: true },
      })

      data.value = list
      total.value = totalItems
    } finally {
      pending.value = false
    }
  }

  fetchList()

  const addItemsPending = ref(false)
  const addItems = async () => {
    if (totalReached.value) return

    addItemsPending.value = true
    try {
      const { list } = await $fetch<ApiResponse>(url, {
        query: {
          ...options.query?.value,
          take: itemsPerPage,
          skip: data.value.length,
        },
      })
      data.value.push(...list)
    } finally {
      addItemsPending.value = false
    }
  }

  return {
    pending,
    addItemsPending,
    data,
    fetchList,
    addItems,
    total,
    totalReached,
    itemsRemain,
  }
}
