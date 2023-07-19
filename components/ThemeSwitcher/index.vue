<script lang="ts" setup>
import { THEME_COLORS } from '../../appConstants'

const palette = ref(THEME_COLORS)
const { ui } = useAppConfig()
const onSelect = (value) => {
  if (currentTab.value === 'Primary') {
    ui.primary = value
  } else {
    ui.gray = value
  }
}
const tabs = ['Primary', 'Secondary']
const currentTab = ref('Primary')
</script>

<template>
  <UPopover>
    <UButton
      icon="i-heroicons-swatch"
      variant="soft"
      :square="true"
    />

    <template #panel>
      <UITabs
        v-model="currentTab"
        :tabs="tabs"
      ></UITabs>
      <div class="grid grid-cols-5 gap-2 p-2">
        <UTooltip
          v-for="color in palette"
          :key="color"
          :text="color"
        >
          <URadio
            :value="color"
            :model-value="currentTab === 'Primary' ? ui.primary : ui.gray"
            :ui="{
              background: `!bg-${color}-500`,
              border: 'border-0',
              base: 'h-6 w-6 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
            }"
            @update:model-value="onSelect"
          ></URadio>
        </UTooltip>
      </div>
    </template>
  </UPopover>
</template>
