<script lang="ts" setup>
definePageMeta({ middleware: 'guard-guest-only' })
</script>

<template>
  <div class="container">
    <div class="mx-auto w-[400px]">
      <div class="text-center text-2xl font-bold">Log In</div>
      <LoginForm />
      <div>
        Don't have an account?
        <NuxtLink to="/signUp"
          ><UButton variant="link">Sign Up</UButton></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
