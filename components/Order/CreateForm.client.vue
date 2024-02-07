<script lang="ts" setup>
import type { Order, Prisma } from '@prisma/client'

const cart = useCart()
const notifier = useNotifier()
const orders = useOrders()

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
    <UCard>
      <div class="flex flex-col space-y-4">
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
              ></UInput>
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
              ></FormRadioPaymentMethod>
            </UFormGroup>
          </VeeField>
        </div>
        <UDivider></UDivider>
        <div class="flex items-center justify-between">
          <div class="font-medium text-gray-900">Total:</div>
          <div>${{ cart.summary.price }}</div>
        </div>
        <UDivider></UDivider>

        <div>
          <UButton
            size="lg"
            type="submit"
            :loading="isPending"
            block
            >Create Order</UButton
          >
        </div>
      </div>
    </UCard>
  </VeeForm>
</template>
