<script lang="ts" setup>
import { useField } from 'vee-validate'
const { errorMessage, meta, value } = useField('fieldName')
</script>

<template>
  <div>
    <input
      v-model="value"
      name="fieldName"
    />
    <span v-if="errorMessage && meta.touched">
      {{ errorMessage }}
    </span>
  </div>
</template>
