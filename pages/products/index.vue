<script lang="ts" setup>
useHead({ title: 'Products' })
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-[200px_1fr] gap-8">
      <div>
        <div
          class="sticky top-defaultLayoutContentTopOffset h-[calc(100vh_-_theme(spacing.defaultLayoutContentTopOffset))]"
        >
          <PageProductsFilterPanel />
        </div>
      </div>
      <PageProductsList />
    </div>
  </div>
</template>
