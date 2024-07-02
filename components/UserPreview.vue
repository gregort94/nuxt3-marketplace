<script lang="ts" setup>
const user = useSupabaseUser()
const supabaseClient = useSupabaseClient()

const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut()
  if (error) throw error
}
</script>

<template>
  <UDropdown
    v-if="user"
    :items="[[{ label: 'Log out', click: signOut }]]"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton
      color="white"
      :label="user.email"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>
