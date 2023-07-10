import type { PaymentMethod } from '@prisma/client'

export const PAYMENT_METHODS = {
  CARD: 'Card',
  CASH: 'Cash',
} as const satisfies { [K in PaymentMethod]: string }
