<script lang="ts" setup>
definePageMeta({ middleware: ['guard-auth-only'] })
const user = useSupabaseUser()

watch(user, (value, oldValue) => {
  if (oldValue && !value) {
    navigateTo('/login')
  }
})
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-[200px_1fr] gap-8">
      <div
        class="sticky top-defaultLayoutContentTopOffset flex h-[calc(100vh_-_(theme(spacing.defaultLayoutContentHeight)))] flex-col border-r dark:border-gray-800"
      >
        <div class="size-10">User: {{ user?.email }}</div>
        <div class="mt-8">
          <UILinkButton
            :button="{ icon: 'i-heroicons-inbox-stack' }"
            to="/user/orders"
          >
            Orders
          </UILinkButton>
        </div>
      </div>
      <div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
