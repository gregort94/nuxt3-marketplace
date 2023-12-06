<script lang="ts" setup>
import { useImage } from '@vueuse/core'

const props = defineProps<{
  loading?: boolean
  src?: string
  imgClasses?: string
}>()

const src = toRef(props, 'src')

const isImageLoaded = ref(false)

const isLoading = computed(() => props.loading || !isImageLoaded.value)

watch(
  src,
  (value) => {
    if (value) {
      useImage(
        { src: value },
        {
          onSuccess: () => {
            isImageLoaded.value = true
          },
        },
      )
    }
  },
  { immediate: true },
)
</script>

<template>
  <VSkeleton
    v-show="isLoading"
    :loading="true"
    :class="$attrs['class']"
  >
  </VSkeleton>
  <img
    v-show="!isLoading"
    :src="src"
    :class="$attrs['class']"
    alt=""
  />
</template>
