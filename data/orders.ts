import { Order } from "@/types/order";

// Mock orders
export const orders: Order[] = [
  {
    id: 1001,

    items: [
      {
        id: 1,
        name: "Premium Gold Trophy",
        slug: "premium-gold-trophy",
        image: "/images/hero/trophy.webp",
        images:[],
        category: "Trophies",
        price: 899,
        featured: true,
        description:
          "Premium gold trophy suitable for schools and corporate awards.",
        quantity: 2,
        reviews: [],
      },
    ],

    total: 1848,

    status: "processing",

    paymentMethod: "Cash on Delivery",

    shippingMethod: "Standard",

    address: {
      fullName: "Vikas",
      phone: "9876543210",
      address: "Sector 62",
      city: "Noida",
      state: "Uttar Pradesh",
      pinCode: "201309",
    },

    createdAt: "2026-07-19",
  },
];