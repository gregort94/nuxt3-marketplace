<script lang="ts" setup></script>

<template>
  <div class="flex min-h-screen flex-col bg-white">
    <AppHeader class="sticky top-0 z-10 bg-white"></AppHeader>
    <div class="grow py-16">
      <slot></slot>
    </div>
  </div>
</template>
