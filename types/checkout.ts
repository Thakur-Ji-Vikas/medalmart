// Shipping options
export type ShippingMethod = "standard" | "express";

// Payment options
export type PaymentMethod = "cod" | "upi" | "card";

// Delivery address
export type Address = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
};

// Checkout state
export type CheckoutData = {
  address: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
};