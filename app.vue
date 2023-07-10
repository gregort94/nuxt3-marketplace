<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
      <template #fallback>
        <div>loading</div>
      </template>
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
