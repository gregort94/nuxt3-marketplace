<script lang="ts" setup></script>

<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-gray-900">
    <TheHeader
      class="sticky top-0 z-10 bg-white/75 backdrop-blur dark:bg-gray-900/75"
    />
    <div class="grow py-16">
      <slot />
    </div>
  </div>
</template>
