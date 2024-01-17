<script lang="ts" setup>
const cart = useCart()
</script>

<template>
  <!-- Order summary -->
  <section
    class="min-w-[300px] rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:p-8"
  >
    <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-gray-600">Subtotal</dt>
        <dd class="text-sm font-medium text-gray-900">
          {{ cart.summary.price }}$
        </dd>
      </div>
      <!-- <div
        class="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <dt class="flex items-center text-sm text-gray-600">
          <span>Shipping estimate</span>
          <a
            href="#"
            class="ml-2 shrink-0 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only"
              >Learn more about how shipping is calculated</span
            >
            <QuestionMarkCircleIcon
              class="h-5 w-5"
              aria-hidden="true"
            />
          </a>
        </dt>
        <dd class="text-sm font-medium text-gray-900">$5.00</dd>
      </div> -->

      <div
        class="flex items-center justify-between border-t border-gray-200 pt-4"
      >
        <dt class="text-base font-medium text-gray-900">Order total</dt>
        <dd class="text-base font-medium text-gray-900">
          {{ cart.summary.price }}$
        </dd>
      </div>
    </dl>

    <div class="mt-6">
      <UButton
        block
        size="lg"
        >Checkout</UButton
      >
    </div>
  </section>
</template>
