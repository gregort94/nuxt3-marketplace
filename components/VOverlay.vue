<script lang="ts" setup></script>

<template>
  <div
    class="absolute inset-0 !m-0 flex cursor-default items-center justify-center bg-white/40"
    @click.stop
  >
    <slot></slot>
  </div>
</template>
