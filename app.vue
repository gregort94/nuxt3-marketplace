<script setup lang="ts"></script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <template #fallback>
      <div>loading</div>
    </template>
  </NuxtLayout>
</template>
