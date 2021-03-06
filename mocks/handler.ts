import { setupServer } from 'msw/node'
import { postBillings } from "./resources/billing.resource"
import { patchOrders, postOrders } from "./resources/order.resource"

/**
 * モックしたいAPIを定義するファイル
 */
const handlers = [
  postBillings,
  postOrders,
  patchOrders,
]

export const mockServer = setupServer(...handlers)