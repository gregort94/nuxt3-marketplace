<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="grid grid-cols-[200px_1fr] gap-8">
      <div>
        <div class="sticky top-[130px]">
          <FilterPanel></FilterPanel>
        </div>
      </div>
      <ProductList></ProductList>
    </div>
  </div>
</template>
