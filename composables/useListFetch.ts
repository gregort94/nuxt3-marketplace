export default <T>(
  url: string,
  options: { query?: Ref<{ [key: string]: string | string[] }> },
  itemsPerPage: number = 20,
) => {
  const data = ref<T[]>([])

  if (options.query) {
    watch(options.query, () => {
      fetchList()
    })
  }

  const pending = ref(false)
  const fetchList = async () => {
    pending.value = true
    try {
      const list = await $fetch<T>(url, {
        query: { ...options.query?.value, take: itemsPerPage },
      })
      data.value = list
    } finally {
      pending.value = false
    }
  }

  fetchList()

  const addItemsPending = ref(false)
  const addItems = async () => {
    addItemsPending.value = true
    try {
      const list = await $fetch<T>(url, {
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

  return { pending, addItemsPending, data, fetchList, addItems }
}
