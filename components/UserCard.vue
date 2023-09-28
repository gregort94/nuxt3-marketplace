<script lang="ts" setup>
const supabaseUser = useSupabaseUser()
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
  <div>
    <HeadlessMenu
      v-if="supabaseUser"
      as="div"
      class="relative ml-3"
    >
      <div>
        <HeadlessMenuButton
          class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {{ supabaseUser.email }}
          <span class="absolute -inset-1.5" />
          <span class="sr-only">Open user menu</span>
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </HeadlessMenuButton>
      </div>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <HeadlessMenuItems
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <HeadlessMenuItem>
            <UButton @click="signOut">Sign out</UButton>
          </HeadlessMenuItem>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
    <NuxtLink
      v-else
      to="login"
    >
      <UButton variant="link">Log In</UButton>
    </NuxtLink>
  </div>
</template>
