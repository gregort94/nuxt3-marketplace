<script lang="ts" setup>
const supabase = useSupabaseClient()
const notifier = useNotifier()
const router = useRouter()

const logIn = async (values) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  })

  if (error) {
    notifier.warn(error.message)
  } else {
    notifier.success('Successfully logged in!')
    router.push('/')
  }
}

const github = async () => {
  const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' })

  if (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <VeeForm
      class="space-y-4"
      @submit="logIn"
    >
      <VeeField
        v-slot="{ value, handleChange, errorMessage, meta }"
        :model-value="'gregort94@gmail.com'"
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
        rules="required"
        :model-value="'g3i8g4'"
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
        >Log In</UButton
      >
    </VeeForm>
    <UDivider label="OR" />
    <UButton
      color="black"
      label="Login with GitHub"
      icon="i-simple-icons-github"
      block
      @click="github"
    />
  </div>
</template>
