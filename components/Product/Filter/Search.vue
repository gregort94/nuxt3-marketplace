<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'

const query = useRouteQuery<string | undefined>('search')

const model = ref(query.value)

const updateQuery = useDebounceFn((value) => {
  query.value = value || undefined
}, 500)

const onInput = (value: string) => {
  model.value = value
  updateQuery(value)
}
</script>

<template>
  <UInput
    :model-value="model"
    @update:model-value="onInput"
  />
</template>
