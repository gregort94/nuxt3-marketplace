<script lang="ts" setup>
definePageMeta({ middleware: 'guest-only' })
</script>

<template>
  <div class="container">
    <div class="mx-auto w-[400px]">
      <div
        class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Log In
      </div>
      <LoginForm></LoginForm>
      <div>
        Don't have an account?
        <NuxtLink to="/signUp"
          ><UButton variant="link">Sign Up</UButton></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
