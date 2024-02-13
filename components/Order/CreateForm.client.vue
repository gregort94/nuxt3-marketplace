<script lang="ts" setup>
import type { Order, Prisma } from '@prisma/client'

const cart = useCart()
const notifier = useNotifier()
const orders = useOrders()
const user = useSupabaseUser()

const isPending = ref(false)

const onSubmit = async (formFields: ModelToCreate<Order>) => {
  isPending.value = true
  await orders.createOrder({
    ...formFields,
    items: Object.values(cart.items).map((item) => ({
      productId: item.product.id,
      price: item.product.price,
      quantity: item.quantity,
    })),
  })
  isPending.value = false
}
</script>

<template>
  <VeeForm @submit="onSubmit">
    <div class="space-y-4">
      <VeeField
        v-slot="{ value, handleChange, errorMessage, meta }"
        name="address"
        rules="required"
      >
        <UFormGroup
          label="Address"
          required
          :error="meta.touched && errorMessage"
        >
          <UInput
            :model-value="value"
            @update:model-value="handleChange"
          />
        </UFormGroup>
      </VeeField>
      <VeeField
        v-slot="{ value, handleChange }"
        value="CARD"
        name="paymentMethod"
      >
        <UFormGroup label="Payment Method">
          <FormRadioPaymentMethod
            :model-value="value"
            @update:model-value="handleChange"
          />
        </UFormGroup>
      </VeeField>
    </div>
    <div class="mt-4">
      <UButton
        size="lg"
        type="submit"
        :loading="isPending"
        block
      >
        Create Order
      </UButton>
    </div>
  </VeeForm>
</template>
