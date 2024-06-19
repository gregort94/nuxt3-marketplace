<script lang="ts" setup></script>

<template>
  <div class="flex min-h-screen flex-col bg-white">
    <AppHeader class="sticky top-0 z-10 bg-white" />
    <div class="grow py-16">
      <slot />
    </div>
  </div>
</template>
