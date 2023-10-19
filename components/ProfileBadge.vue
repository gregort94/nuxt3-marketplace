<script lang="ts" setup>
const user = useSupabaseUser()
const supabaseClient = useSupabaseClient()

const signOut = async () => {
  try {
    const { error } = await supabaseClient.auth.signOut()
    if (error) throw error
  } catch (err) {
    throw err
  }
}
</script>

<template>
  <UDropdown
    :items="[[{ label: 'Log out', click: signOut }]]"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton
      color="white"
      :label="user?.email"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>
