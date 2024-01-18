<script lang="ts" setup>
import { faker } from '@faker-js/faker'

const onClick = () => {
  // $fetch('/api/user/orders')
  // faker.helpers.un
  console.log(faker.commerce.product())
}
</script>

<template>
  <div>
    <UButton @click="onClick">Click</UButton>
  </div>
</template>
