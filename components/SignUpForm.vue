<script lang="ts" setup>
const supabase = useSupabaseClient()
const toast = useToast()

const signUp = async (values) => {
  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  })

  if (error) {
    toast.add({ title: error.message, color: 'red' })
  } else {
    toast.add({ title: 'Successfully logged in!' })
    navigateTo({ path: '/' })
  }
}
</script>

<template>
  <div>
    <VeeForm
      class="space-y-4"
      @submit="signUp"
    >
      <VeeField
        v-slot="{ value, handleChange, errorMessage, meta }"
        name="email"
        rules="required|email"
      >
        <UFormGroup
          label="Email"
          :error="meta.touched && errorMessage"
        >
          <UInput
            :model-value="value"
            @update:model-value="handleChange"
          />
        </UFormGroup>
      </VeeField>
      <VeeField
        v-slot="{ value, handleChange, meta, errorMessage }"
        name="password"
        rules="required|min:6"
      >
        <UFormGroup
          :error="meta.touched && errorMessage"
          label="Password"
        >
          <UInput
            :model-value="value"
            @update:model-value="handleChange"
          />
        </UFormGroup>
      </VeeField>
      <UButton
        class="w-full"
        type="submit"
        block
        >Sign Up</UButton
      >
    </VeeForm>
  </div>
</template>
