<script lang="ts" setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-[200px_1fr] gap-8">
      <div
        class="sticky top-defaultLayoutContentTopOffset flex h-[calc(100vh_-_(theme(spacing.defaultLayoutContentHeight)))] flex-col border-r dark:border-gray-800"
      >
        <div class="size-10">User: {{ user?.email }}</div>
        <div class="mt-8">
          <NuxtLink to="/user/orders">
            <UButton
              variant="link"
              color="white"
              icon="i-heroicons-inbox-stack"
              >Orders</UButton
            >
          </NuxtLink>
        </div>
      </div>
      <div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
