<script lang="ts" setup></script>

<template>
  <div
    class="absolute inset-0 !m-0 flex cursor-default items-center justify-center rounded-md bg-gray-100/40 dark:bg-gray-900/40"
    @click.stop
  >
    <slot />
  </div>
</template>
