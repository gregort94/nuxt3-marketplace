<script lang="ts" setup>
import { COLORS_BY_TYPE } from '~/constants/themeColors'
const { ui } = useAppConfig()

const primary = computed({
  get() {
    return ui.primary
  },
  set(value) {
    ui.primary = value
  },
})

const gray = computed({
  get() {
    return ui.gray
  },
  set(value) {
    ui.gray = value
  },
})
</script>

<template>
  <UPopover>
    <UButton
      variant="ghost"
      icon="i-heroicons-swatch"
    />
    <template #panel>
      <div class="space-y-4 p-4">
        <ColorPickerPalete
          v-model="primary"
          :colors="COLORS_BY_TYPE.primary"
        />
        <ColorPickerPalete
          v-model="gray"
          :colors="COLORS_BY_TYPE.gray"
        />
      </div>
    </template>
  </UPopover>
</template>
