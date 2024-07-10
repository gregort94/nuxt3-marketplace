<script lang="ts" setup>
definePageMeta({ middleware: 'guard-guest-only' })
</script>

<template>
  <div class="container">
    <div class="mx-auto w-[400px]">
      <div class="text-center text-2xl font-bold">Sign Up</div>
      <SignUpForm>
        <NuxtLink to="/signUp">Sign Up</NuxtLink>
      </SignUpForm>
      <div>
        Have an account?
        <NuxtLink to="/login"
          ><UButton variant="link">Log In</UButton></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
