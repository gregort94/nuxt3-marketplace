<script setup lang="ts">
interface Props {
  tabs: string[]
  modelValue: string
}
const props = defineProps<Props>()
const emit = defineEmits<{
  'update:model-value': [payload: string]
}>()
</script>
<template>
  <div>
    <div class="hidden sm:block">
      <nav
        class="isolate flex divide-x divide-gray-200 rounded-lg shadow"
        aria-label="Tabs"
      >
        <div
          v-for="(tab, tabIdx) in tabs"
          :key="tab"
          :class="[
            tab === modelValue
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700',
            tabIdx === 0 ? 'rounded-l-lg' : '',
            tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
            'group relative min-w-0 flex-1 cursor-pointer select-none overflow-hidden bg-white p-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
          ]"
          @click="emit('update:model-value', tab)"
        >
          <span>{{ tab }}</span>
          <span
            aria-hidden="true"
            :class="[
              tab === modelValue ? 'bg-indigo-500' : 'bg-transparent',
              'absolute inset-x-0 bottom-0 h-0.5',
            ]"
          />
        </div>
      </nav>
    </div>
  </div>
</template>
