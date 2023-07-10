<script lang="ts" setup>
const user = useSupabaseUser()
const supabaseClient = useSupabaseClient()

const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut()
  if (error) throw error
}

const items = [
  [
    {
      label: 'Orders',
      icon: 'i-heroicons-inbox-stack',
      click: () => {
        navigateTo('/user/orders')
      },
    },
    { label: 'Log out', click: signOut },
  ],
]
</script>

<template>
  <ClientOnly>
    <UDropdown
      v-if="user"
      :items="items"
      :popper="{ placement: 'bottom-start', offsetDistance: 0 }"
      mode="hover"
    >
      <NuxtLink to="/user">
        <UButton
          color="gray"
          icon="i-heroicons-user-circle"
        />
      </NuxtLink>
    </UDropdown>
    <NuxtLink
      v-else
      to="/login"
    >
      <UButton
        color="gray"
        variant="link"
      >
        Log In
      </UButton>
    </NuxtLink>
  </ClientOnly>
</template>
