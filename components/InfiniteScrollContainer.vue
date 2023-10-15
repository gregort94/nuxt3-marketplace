<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'trigger'): void
}>()

const containerEl = ref<HTMLElement>()

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    if (
      containerEl.value &&
      containerEl.value?.getBoundingClientRect().bottom < window.innerHeight
    ) {
      emit('trigger')
    }
  })
})
</script>

<template>
  <div ref="containerEl">
    <slot></slot>
  </div>
</template>
