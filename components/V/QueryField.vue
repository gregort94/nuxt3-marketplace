<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'

const props = defineProps<{ name: string }>()

const model = useRouteQuery(props.name)

const handleChange = (value: string | string[] | null) => {
  model.value = value
}
</script>

<template>
  <slot
    :value="model"
    :handle-change="handleChange"
  />
</template>
