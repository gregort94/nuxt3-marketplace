<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <template #fallback>
        <div>loading</div>
      </template>
    </NuxtLayout>
  </div>
</template>
