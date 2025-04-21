import { ProductVariant } from "./products";
import { Money } from "./shopifyGlobal";

export interface CartCost {
  checkoutChargeAmount?: Money;
  subtotalAmount?: Money;
  subtotalAmountEstimated?: boolean;
  totalAmount?: Money;
  totalAmountEstimated?: boolean;
}

export interface CartItemCost {
  amountPerQuantity?: Money;
  subtotalAmount?: Money;
  totalAmount?: Money;
}

export interface CartItem {
  cost?: CartItemCost;
  id: string;
  merchandise?: ProductVariant;
  quantity: number;
  title?: string;
}

export interface CartEdge {
  node: CartItem;
  cursor?: string;
}

export interface CartLine {
  edges?: CartEdge[];
  nodes?: CartItem[];
}

export interface Cart {
  cost?: CartCost;
  createdAt?: string;
  id: string;
  lines: CartLine;
  totalQuantity?: number;
  updatedAt?: string;
}
