import { CartItem } from "./cart";

// Order status
export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

// Delivery address
export type OrderAddress = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
};

// Order
export type Order = {
  id: number;

  items: CartItem[];

  total: number;

  status: OrderStatus;

  paymentMethod: string;

  shippingMethod: string;

  address: OrderAddress;

  createdAt: string;
};